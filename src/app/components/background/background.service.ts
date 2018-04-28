import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundService {

  private urlImages = 'https://source.unsplash.com/category/nature/1920x1080';

  constructor() { }

  getRandom() {
    return this.urlImages;
  }
}
