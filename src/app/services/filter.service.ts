import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ProgramListFilters } from "@apiModels/ProgramListFilters";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filtersShowed$ = new BehaviorSubject<boolean>(false);
  searchQuery$ = new BehaviorSubject<string>('');
  releaseDateRange$ = new BehaviorSubject<{ from: Date | null, to: Date | null }>({from: null, to: null});

  getProgramListFilters(): Partial<ProgramListFilters> {
    const {from, to} = this.releaseDateRange$.value;
    return {query: this.searchQuery$.value, yearFrom: from?.getFullYear(), yearTo: to?.getFullYear()};
  }
}
