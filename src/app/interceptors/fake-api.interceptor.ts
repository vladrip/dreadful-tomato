import { HttpInterceptorFn, HttpParams, HttpResponse } from '@angular/common/http';
import { ProgramType } from "@apiModels/enums/ProgramType";
import { delay, of } from "rxjs";

export const fakeApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('program-list'))
    return getPrograms(req.params)
  return next(req);
};

function getPrograms(params: HttpParams) {
  const programType: ProgramType = ProgramType[params.get("programType").toUpperCase()];
  return ok({programType});
}

const FAKE_DELAY_MS = 500;

function ok(body?: any) {
  return of(new HttpResponse({ status: 200, body })).pipe(delay(FAKE_DELAY_MS));
}
