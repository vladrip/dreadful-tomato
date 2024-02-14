import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AssetIconComponent } from "./img-icon/asset-icon.component";


@NgModule({
  declarations: [
      AssetIconComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
      AssetIconComponent
  ]
})
export class SharedModule { }
