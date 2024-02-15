import { Injectable } from '@angular/core';
import { API_URL } from "@app/constants/Constants";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ProgramListFilters } from "@apiModels/ProgramListFilters";
import { Pageable } from "@apiModels/Pageable";
import { ProgramItem } from "@app/models/ProgramItem";
import { Page } from "@apiModels/Page";

@Injectable({
  providedIn: 'root'
})
export class ProgramListHttpService {
  private readonly URL = `${API_URL}/program-list`;

  constructor(private http: HttpClient) {
  }

  getAll(filters: ProgramListFilters, pageable: Pageable) {
    const params = new HttpParams({fromObject: {...filters, ...pageable}});
    return this.http.get<Page<ProgramItem>>(this.URL, {params});
  }
}
