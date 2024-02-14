import { Component } from '@angular/core';
import { MediaListType } from "@components/models/enums/MediaListType";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  mediaTypeTabs: MediaListType[] = Object.values(MediaListType);
  activeMediaTypeTab: MediaListType;

  constructor(route: ActivatedRoute) {
    route.url.subscribe(url => {
      const lastSegment = url[url.length - 1];
      if (lastSegment?.path) this.activeMediaTypeTab = MediaListType[lastSegment.path.toUpperCase()];
    });
  }

}
