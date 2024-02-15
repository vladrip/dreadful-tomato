import { HttpClient, HttpInterceptorFn, HttpParams, HttpResponse } from '@angular/common/http';
import { ProgramType, programTypeOf } from "@apiModels/enums/ProgramType";
import { delay, of, switchMap, tap } from "rxjs";
import { inject } from "@angular/core";
import { ProgramApiItem } from "@apiModels/ProgramApiItem";
import { Pageable } from "@apiModels/Pageable";
import { Page } from "@apiModels/Page";
import { ProgramItem } from "@app/models/ProgramItem";

const PROGRAMS_DATA_URL = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';
let mockProgramStorage: Page<ProgramApiItem>;

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('program-list'))
    return getPrograms(req.params);
  return next(req);
};

function prepareProgramStorage() {
  if (mockProgramStorage) {
    return of(mockProgramStorage);
  } else {
    const http = inject(HttpClient);
    return http.get<Page<ProgramApiItem>>(PROGRAMS_DATA_URL)
      .pipe(tap(programPage => mockProgramStorage = programPage));
  }
}

function getPrograms(params: HttpParams) {
  return prepareProgramStorage()
    .pipe(switchMap(programApiPage => {
      const programType: ProgramType = programTypeOf(params.get("programType"));
      const pageable: Pageable = {page: +params.get("page"), size: +params.get("size")};

      const filteredPrograms = programApiPage.entries
        .filter(program => programTypeOf(program.programType) == programType);

      const firstElementIndex = pageable.page * pageable.size;
      const entries = filteredPrograms
        .slice(firstElementIndex, firstElementIndex + pageable.size)
        .map(programApiItem => ProgramItem.ofApiItem(programApiItem));

      const page: Page<ProgramItem> = {entries, number: pageable.page, total: filteredPrograms.length};
      return ok(page);
    }));
}

const FAKE_DELAY_MS = 500;

function ok(body?: any) {
  return of(new HttpResponse({status: 200, body})).pipe(delay(FAKE_DELAY_MS));
}
