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
import { FilterRowComponent } from "@components/program-list/filter-row/filter-row.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";
import { MatRipple } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProgramListComponent,
    FilterRowComponent
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
    MatCardImage,
    MatInput,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatRipple
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([mockApiInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
