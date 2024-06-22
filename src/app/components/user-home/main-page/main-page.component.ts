import { Component } from '@angular/core';
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {PublishComponent} from "../publish/publish.component";
import {RightBarComponent} from "../right-bar/right-bar.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
    imports: [
        LeftBarComponent,
        PublishComponent,
        RightBarComponent
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
