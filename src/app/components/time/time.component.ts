import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TimeService } from './time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  now;
  question1;
  nombre;
  greeting: string;

  constructor(private _timeService: TimeService) {
    this.setTime();
    this.greetingStatus();
    this.changeQuestion();
  }

  ngOnInit() { }

  setTime() {
    setInterval(() => (this.now = moment().format('LT')), 1000);
  }

  setName() {
    if (!this.isUserExist()) {
      this._timeService.saveName(this.nombre);
    }
  }

  greetingStatus() {
    const localStorageItem = this._timeService.getName();
    this.greeting = localStorageItem ? `Good Evening, ${localStorageItem}` : 'Good Evening';
  }

  isUserExist() {
    return this._timeService.getName();
  }

  changeQuestion() {
    this.question1 = this.isUserExist() ? `What's your main focus for today?` : `What's your name?`;
  }
}
