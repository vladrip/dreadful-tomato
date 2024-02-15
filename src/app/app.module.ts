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
import { ProgramListComponent } from "@components/program-list/program-list.component";
import { MatTabLink, MatTabNav, MatTabNavPanel } from "@angular/material/tabs";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { mockApiInterceptor } from "@app/interceptors/mock-api.interceptor";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatPaginator } from "@angular/material/paginator";
import { MatCard, MatCardImage } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProgramListComponent
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
    MatTabNav,
    MatTabNavPanel,
    MatTabLink,
    MatProgressSpinner,
    MatPaginator,
    MatCard,
    MatCardImage
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(
        withInterceptors([mockApiInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
