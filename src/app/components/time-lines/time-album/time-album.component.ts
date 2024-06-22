import {Component, OnInit} from '@angular/core';
import {TimeLineDetailesComponent} from "../time-line-detailes/time-line-detailes.component";
import {TimeLineProfileComponent} from "../time-line-profile/time-line-profile.component";

@Component({
  selector: 'app-time-album',
  templateUrl: './time-album.component.html',
  standalone: true,
  imports: [
    TimeLineDetailesComponent,
    TimeLineProfileComponent
  ],
  styleUrls: ['./time-album.component.css']
})
export class TimeAlbumComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
