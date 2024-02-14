import { Component, DestroyRef, inject } from '@angular/core';
import { ProgramType } from "@api/models/enums/ProgramType";
import { ActivatedRoute } from "@angular/router";
import { ProgramListHttpService } from "@api/services/program-list-http.service";
import { finalize } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.scss'
})
export class ProgramListComponent {
  private readonly destroyRef = inject(DestroyRef);
  programType: ProgramType;
  loading: boolean = true;

  constructor(route: ActivatedRoute, private programListService: ProgramListHttpService) {
    route.url.subscribe(url => {
      const lastSegment = url[url.length - 1];
      this.programType = ProgramType[lastSegment.path.toUpperCase()];
      this.loadPrograms();
    })
  }

  loadPrograms() {
    this.loading = true;
    this.programListService.getAll({programType: this.programType})
        .pipe(
            finalize(() => this.loading = false),
            takeUntilDestroyed(this.destroyRef)
        )
        .subscribe({
          next: response => console.log(response),
          error: err => console.error(err) //TODO: replace with material snackbars
        })
  }
}
