import { Component } from '@angular/core';
import {LeftBarComponent} from "./left-bar/left-bar.component";
import {PublishComponent} from "./publish/publish.component";
import {RightBarComponent} from "./right-bar/right-bar.component";

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    LeftBarComponent,
    PublishComponent,
    RightBarComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
