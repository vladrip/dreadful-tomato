import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AssetIconComponent } from "./img-icon/asset-icon.component";
import { PaginatorComponent } from "@components/shared/paginator/paginator.component";
import { MatFabButton, MatMiniFabButton } from "@angular/material/button";


@NgModule({
  declarations: [
    AssetIconComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatFabButton,
    MatMiniFabButton
  ],
  exports: [
    AssetIconComponent,
    PaginatorComponent
  ]
})
export class SharedModule {
}
