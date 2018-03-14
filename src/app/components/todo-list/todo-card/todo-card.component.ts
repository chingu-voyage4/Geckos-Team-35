import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  public todoText: string;
  isClassVisible: false;

  constructor(private todoService: TodoService) { this.todoText = ''; }

  ngOnInit() {
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

}
