import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './background.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(private _bs: BackgroundService) {

    // this._bs.getRandom();
   }

  ngOnInit() {
  }

}
