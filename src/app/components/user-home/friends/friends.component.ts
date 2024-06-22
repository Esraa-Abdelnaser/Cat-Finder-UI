import { Component } from '@angular/core';
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {PublishComponent} from "../publish/publish.component";
import {RightBarComponent} from "../right-bar/right-bar.component";

@Component({
  selector: 'app-friends',
  standalone: true,
    imports: [
        LeftBarComponent,
        PublishComponent,
        RightBarComponent
    ],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

}
