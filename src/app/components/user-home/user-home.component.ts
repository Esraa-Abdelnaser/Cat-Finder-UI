import {Component} from '@angular/core';
import {LeftBarComponent} from "./left-bar/left-bar.component";
import {PublishComponent} from "./publish/publish.component";
import {RightBarComponent} from "./right-bar/right-bar.component";
import {FriendsComponent} from "./friends/friends.component";
import {CoolImagesComponent} from "./cool-images/cool-images.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TimeLineComponent} from "../time-lines/time-line/time-line.component";

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    LeftBarComponent,
    PublishComponent,
    RightBarComponent,
    FriendsComponent,
    CoolImagesComponent,
    MainPageComponent,
    TimeLineComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
