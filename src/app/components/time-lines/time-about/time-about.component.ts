import {Component, OnInit} from '@angular/core';
import {TimeLineDetailesComponent} from "../time-line-detailes/time-line-detailes.component";
import {TimeLineProfileComponent} from "../time-line-profile/time-line-profile.component";

@Component({
  selector: 'app-time-about',
  templateUrl: './time-about.component.html',
  standalone: true,
  imports: [
    TimeLineDetailesComponent,
    TimeLineProfileComponent
  ],
  styleUrls: ['./time-about.component.css']
})
export class TimeAboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
