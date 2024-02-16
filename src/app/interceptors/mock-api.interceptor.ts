import { HttpClient, HttpInterceptorFn, HttpParams, HttpResponse } from '@angular/common/http';
import { programTypeOf } from "@apiModels/enums/ProgramType";
import { delay, of, switchMap, tap } from "rxjs";
import { inject } from "@angular/core";
import { ProgramApiItem } from "@apiModels/ProgramApiItem";
import { Pageable } from "@apiModels/Pageable";
import { Page } from "@apiModels/Page";
import { ProgramItem } from "@app/models/ProgramItem";
import { ProgramListFilters } from "@apiModels/ProgramListFilters";

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
      const pageable: Pageable = {page: +params.get("page"), size: +params.get("size")};
      const filters: ProgramListFilters = {
        programType: programTypeOf(params.get("programType")),
        query: params.get("query"),
        yearFrom: +params.get("yearFrom"),
        yearTo: +params.get("yearTo")
      };

      const filteredPrograms = programApiPage.entries
        .filter(program =>
          programTypeOf(program.programType) === filters.programType
          && (!filters.query || program.title.toLowerCase().includes(filters.query.toLowerCase()))
          && (isNaN(filters.yearFrom) || filters.yearFrom <= program.releaseYear)
          && (isNaN(filters.yearTo) || filters.yearTo >= program.releaseYear)
        );
      console.log(filters, (!filters.query || 'American History'.toLowerCase().includes(filters.query.toLowerCase()))
        && (!isNaN(filters.yearFrom) || 1998 >= filters.yearFrom)
        && (!isNaN(filters.yearTo) || 1998 <= filters.yearTo));

      const firstElementIndex = pageable.page * pageable.size;
      const entries = filteredPrograms
        .slice(firstElementIndex, firstElementIndex + pageable.size)
        .map(programApiItem => ProgramItem.ofApiItem(programApiItem));

      const page: Page<ProgramItem> = {entries, number: pageable.page, total: filteredPrograms.length};
      return ok(page);
    }));
}

const FAKE_DELAY_MS = 300;

function ok(body?: any) {
  return of(new HttpResponse({status: 200, body})).pipe(delay(FAKE_DELAY_MS));
}
