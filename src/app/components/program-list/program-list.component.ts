import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProgramType, programTypeOf } from "@api/models/enums/ProgramType";
import { ActivatedRoute } from "@angular/router";
import { ProgramListHttpService } from "@api/services/program-list-http.service";
import { debounceTime, finalize, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Pageable } from "@apiModels/Pageable";
import { PROGRAM_PAGE_SIZE } from "@app/constants/Constants";
import { ProgramListFilters } from "@apiModels/ProgramListFilters";
import { ProgramItem } from "@app/models/ProgramItem";
import { Page } from "@apiModels/Page";
import { FilterService } from "@app/services/filter.service";
import { SnackbarService } from "@app/services/snackbar.service";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.scss'
})
export class ProgramListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly PROGRAM_PAGE_SIZE = PROGRAM_PAGE_SIZE;
  programType: ProgramType;
  programPage: Page<ProgramItem>;
  loading: boolean = true;

  constructor(route: ActivatedRoute,
              private programListService: ProgramListHttpService,
              protected filterService: FilterService,
              private snackbarService: SnackbarService) {

    route.url.subscribe(url => {
      const lastSegment = url[url.length - 1];
      this.programType = programTypeOf(lastSegment.path);
      this.loadPrograms({page: 0, size: PROGRAM_PAGE_SIZE});
    });
  }

  ngOnInit(): void {
    this.filterService.searchQuery$
      .pipe(skip(1), debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.loadPrograms({page: 0, size: PROGRAM_PAGE_SIZE}),
        error: err => this.snackbarService.error(err.message)
      });

    this.filterService.releaseDateRange$
      .pipe(skip(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.loadPrograms({page: 0, size: PROGRAM_PAGE_SIZE}),
        error: err => this.snackbarService.error(err.message)
      });
  }

  loadPrograms(pageable: Pageable) {
    this.loading = true;
    const filters: ProgramListFilters = {programType: this.programType, ...this.filterService.getProgramListFilters()};
    this.programListService.getAll(filters, pageable)
      .pipe(
        finalize(() => this.loading = false),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: programPage => {
          this.programPage = programPage;
        },
        error: err => this.snackbarService.error(err.message)
      });
  }

  onPageChanged(pageIndex: number) {
    this.loadPrograms({page: pageIndex, size: PROGRAM_PAGE_SIZE});
  }
}
