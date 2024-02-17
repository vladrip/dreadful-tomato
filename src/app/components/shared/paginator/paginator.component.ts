import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  readonly maxPagesVisible = 5;
  @Input() pageSize: number;
  @Input() total: number;

  @Input() pageIndex: number;
  @Output() pageIndexChange = new EventEmitter<number>();

  nextPage() {
    if (this.pageIndex < this.totalPages() - 1)
      this.pageIndexChange.emit(this.pageIndex + 1)
  }

  prevPage() {
    if (this.pageIndex > 0)
      this.pageIndexChange.emit(this.pageIndex - 1);
  }

  totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  indexesOfVisiblePages() {
    const visiblePagesIndexes = [];
    const rangeIndex = Math.floor(this.pageIndex / this.maxPagesVisible);
    for (let i = 0; i < this.totalPages() % (this.maxPagesVisible * (rangeIndex + 1)); i++) {
      visiblePagesIndexes[i] = this.maxPagesVisible * rangeIndex + i;
    }
    return visiblePagesIndexes;
  }
}
