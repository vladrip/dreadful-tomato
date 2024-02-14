import { Component, DestroyRef, inject } from '@angular/core';
import { ProgramType } from "@api/models/enums/ProgramType";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private readonly destroyRef = inject(DestroyRef);
  programTypeTabs: ProgramType[] = Object.values(ProgramType);
  activeProgramTypeTab: ProgramType;

  constructor(router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          const lastSegment = event.url.substring(url.lastIndexOf("/") + 1);
          this.activeProgramTypeTab = ProgramType[lastSegment.toUpperCase()];
        }
      });
  }
}
