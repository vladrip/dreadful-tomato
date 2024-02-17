import { Component } from '@angular/core';
import { FilterService } from "@app/services/filter.service";
import { MatDatepicker } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrl: './filter-row.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class FilterRowComponent {
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  yearRangeView: string;
  private selectingEndYear = false;

  constructor(protected filterService: FilterService) {
  }

  onYearSelected(year: Date, datepicker: MatDatepicker<Date>) {
    if (this.selectingEndYear) {
      this.dateTo = year;
      this.yearRangeView += year.getFullYear();
      this.selectingEndYear = false;
      this.filterService.releaseDateRange$.next({from: this.dateFrom, to: this.dateTo})
      this.dateFrom = null;
      this.dateTo = null;
      datepicker.close();
    } else {
      this.dateFrom = year;
      this.yearRangeView = year.getFullYear() + '-';
      this.selectingEndYear = true;
      this.reopenYearPicker(datepicker);
    }
  }

  //TODO: rework year range selection
  //material doesn't give an option NOT to switch to month view, or configure year range selection... need to reopen it instead for fast solution
  reopenYearPicker(datepicker: MatDatepicker<Date>) {
    datepicker.close();
    const checkPickerClosed = setInterval(() => {
      if (document.querySelector('.cdk-overlay-container mat-calendar') === null) {
        datepicker.open();
        clearInterval(checkPickerClosed);
      }
    }, 50);
  }

  filterYears = (d: Date | null): boolean => {
    return !this.dateFrom || d >= this.dateFrom;
  }
}
