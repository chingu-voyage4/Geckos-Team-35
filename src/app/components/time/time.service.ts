import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }


  saveName(name: string) {
    if (!this.getName()) {
      localStorage.setItem('name', name);
    }
  }

  getName() {
    return localStorage.getItem('name');
  }



}
