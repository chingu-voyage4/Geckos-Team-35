import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  now;

  constructor() {
    this.setTime();
  }

  ngOnInit() { }

  setTime() {
    setInterval(() => this.now = moment().format('LT'), 1000);
  }

}
