import { Component } from '@angular/core';
import {PublishComponent} from "../publish/publish.component";
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {RightBarComponent} from "../right-bar/right-bar.component";

@Component({
  selector: 'app-cool-images',
  standalone: true,
  imports: [
    PublishComponent,
    LeftBarComponent,
    RightBarComponent
  ],
  templateUrl: './cool-images.component.html',
  styleUrl: './cool-images.component.css'
})
export class CoolImagesComponent {

}
