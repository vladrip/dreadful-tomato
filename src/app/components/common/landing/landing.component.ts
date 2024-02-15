import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ProgramType } from "@apiModels/enums/ProgramType";

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  protected readonly ProgramType = ProgramType;
}
