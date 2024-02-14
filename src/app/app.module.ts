import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from "@components/layout/layout.component";
import { NgOptimizedImage } from "@angular/common";
import { SharedModule } from "@components/shared/shared.module";
import { MediaListComponent } from "@components/media-list/media-list.component";
import { FilterRowComponent } from "@components/shared/filter-row/filter-row.component";
import { MatTabLink, MatTabNav, MatTabNavPanel } from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MediaListComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgOptimizedImage,
    FilterRowComponent,
    MatTabNav,
    MatTabNavPanel,
    MatTabLink
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
