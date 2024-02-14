import { TestBed } from '@angular/core/testing';

import { ProgramListHttpService } from './program-list-http.service';

describe('ProgramListHttpService', () => {
  let service: ProgramListHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramListHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
