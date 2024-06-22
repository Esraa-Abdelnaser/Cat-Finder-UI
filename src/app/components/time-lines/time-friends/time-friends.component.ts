import {Component, OnInit} from '@angular/core';
import {TimeLineDetailesComponent} from "../time-line-detailes/time-line-detailes.component";
import {TimeLineProfileComponent} from "../time-line-profile/time-line-profile.component";

@Component({
  selector: 'app-time-friends',
  templateUrl: './time-friends.component.html',
  standalone: true,
  imports: [
    TimeLineDetailesComponent,
    TimeLineProfileComponent
  ],
  styleUrls: ['./time-friends.component.css']
})
export class TimeFriendsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
