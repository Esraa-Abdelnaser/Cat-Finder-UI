import {Component, OnInit} from '@angular/core';
import {TimeFriendsComponent} from "./time-friends/time-friends.component";
import {TimeLineComponent} from "./time-line/time-line.component";

@Component({
  selector: 'app-time-lines',
  templateUrl: './time-lines.component.html',
  standalone: true,
  imports: [
    TimeFriendsComponent,
    TimeLineComponent
  ],
  styleUrls: ['./time-lines.component.css']
})
export class TimeLinesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
