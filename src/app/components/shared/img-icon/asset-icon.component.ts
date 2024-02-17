import { Component, Input } from '@angular/core';

@Component({
  selector: 'asset-icon',
  templateUrl: './asset-icon.component.html',
  styleUrl: './asset-icon.component.scss'
})
export class AssetIconComponent {
  @Input() name: string;
  @Input() pos: 'start' | 'end' = 'start';
  @Input() sizeRem: number = 1.25;
}
