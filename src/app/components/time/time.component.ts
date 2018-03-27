import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TimeService, User } from './time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  now;
  question1;
  user: User = new User();
  hasName = true;
  greeting: string;
  actualTask;

  constructor(private _timeService: TimeService) {

    this.setTime();
    this.greetingStatus();
    //  this.changeQuestion();
  }

  ngOnInit() {
    this.hasName = this.isUserExist();
    this.actualTask = this._timeService.getActualTask();
  }

  setTime() {
    setInterval(() => (this.now = moment().format('LT')), 1000);
  }

  setUser() {
    if (!this.isUserExist) {
      this._timeService.saveUser(this.user);
      this.hasName = true;
      this.greetingStatus();
    } else {
      this._timeService.saveUser(this.user);
      this.actualTask = this.user.task;
      this.user.task = '';
    }
  }

  deleteActualTask() {
    this._timeService.deleteActualTask();
    this.actualTask = null;
  }

  greetingStatus() {
    this.user = this._timeService.getUser();
    this.greeting = this.user ? `Good Evening, ${this.user.name}` : 'Good Evening';
  }

  isUserExist() {
    return this._timeService.getUser().name ? true : false;
  }



}
