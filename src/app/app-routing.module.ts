import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "@components/layout/layout.component";
import { MediaListComponent } from "@components/media-list/media-list.component";
import { MediaListType } from "@components/models/enums/MediaListType";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('@components/common/landing/landing.component').then(mod => mod.LandingComponent) },
      { path: MediaListType.MOVIES.toLowerCase(), component: MediaListComponent },
      { path: MediaListType.SERIES.toLowerCase(), component: MediaListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
