import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BackgroundComponent } from './components/background/background.component';
import { TimeComponent } from './components/time/time.component';
import { WeatherComponent } from './components/weather/weather.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCardComponent } from './components/todo-list/todo-card/todo-card.component';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    BackgroundComponent,
    TimeComponent,
    WeatherComponent,
    QuotesComponent,
    TodoListComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
