import { Injectable } from '@angular/core';

export class User {
  constructor() { }
  name: string;
  task: string;
}

@Injectable()
export class TimeService {

  constructor() { }

  saveUser(user: User) {
    if (!this.getUser().name) {
      localStorage.setItem('user', user.name);
    } else {
      localStorage.setItem('actualTask', user.task);
    }
  }

  getUser() {
    const currentUser = new User();
    currentUser.name = localStorage.getItem('user');
    return currentUser;
  }

  getActualTask() {
    return localStorage.getItem('actualTask');
  }

  deleteActualTask() {
    return localStorage.removeItem('actualTask');
  }



}
