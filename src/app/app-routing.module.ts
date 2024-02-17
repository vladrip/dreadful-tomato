import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "@components/layout/layout.component";
import { ProgramListComponent } from "@components/program-list/program-list.component";
import { ProgramType } from "@api/models/enums/ProgramType";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('@components/common/landing/landing.component').then(mod => mod.LandingComponent) },
      { path: ProgramType.MOVIES.toLowerCase(), component: ProgramListComponent },
      { path: ProgramType.SERIES.toLowerCase(), component: ProgramListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
