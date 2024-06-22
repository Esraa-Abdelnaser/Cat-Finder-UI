import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-time-line-profile',
  templateUrl: './time-line-profile.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./time-line-profile.component.css']
})
export class TimeLineProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
