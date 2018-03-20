import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  now;

  question1: String = `What's your name?`;
  nombre: String = '';
  greeting: String;

  constructor() {
    this.setTime();
    this.greetings();
    // verificar el si tiene nombre;
    // cambiar la pregunta 2da pregunta;
    // agregar el metodo de guardar el nombre en localStorage;
  }

  ngOnInit() { }

  setTime() {
    setInterval(() => (this.now = moment().format('LT')), 1000);
  }

  setName() {
    localStorage.setItem('name', JSON.stringify({ name: this.nombre }));
  }

  greetings() {
    const localStorageItem = JSON.parse(localStorage.getItem('name'));
    this.greeting = localStorageItem ? `Good Evening, ${localStorageItem}` : 'Good Evening';
  }
}
