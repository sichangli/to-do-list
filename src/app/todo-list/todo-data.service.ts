import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {todos} from './todos';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  getAllTodos(): Promise<Todo[]> {
    return of(todos).toPromise();
  }

  checkAllTodos(): Promise<any> {
    return Promise.resolve();
  }

  checkTodo(todo: Todo): Promise<any> {
    return Promise.resolve();
  }

  uncheckTodo(todo: Todo): Promise<any> {
    return Promise.resolve();
  }
}
