import { Injectable } from '@angular/core';
import { API_URL } from "@app/constants/Constants";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ProgramListFilters } from "@apiModels/ProgramListFilters";

@Injectable({
    providedIn: 'root'
})
export class ProgramListHttpService {
    private readonly URL = `${API_URL}/program-list`;

    constructor(private http: HttpClient) {
    }

    getAll(filters: ProgramListFilters) {
        const params = new HttpParams({fromObject: {...filters}});
        return this.http.get(this.URL, {params});
    }
}
