import {Component, OnInit} from '@angular/core';
import {TimeLineProfileComponent} from "../time-line-profile/time-line-profile.component";
import {PublishComponent} from "../../user-home/publish/publish.component";
import {TimeLineDetailesComponent} from "../time-line-detailes/time-line-detailes.component";

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  standalone: true,
  imports: [
    TimeLineProfileComponent,
    PublishComponent,
    TimeLineDetailesComponent
  ],
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
