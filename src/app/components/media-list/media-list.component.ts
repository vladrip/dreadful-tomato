import { Component } from '@angular/core';
import { MediaListType } from "@components/models/enums/MediaListType";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss'
})
export class MediaListComponent {
  mediaListType: MediaListType;

  constructor(route: ActivatedRoute) {
    route.url.subscribe(url => {
      const lastSegment = url[url.length - 1];
      this.mediaListType = MediaListType[lastSegment.path.toUpperCase()];
    })
  }
}
