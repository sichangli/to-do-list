import {Component, OnInit} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo, TodoGroup} from './todo';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoGroups: TodoGroup[] = [];
  expanded = new Map<string, boolean>();
  showChecked = false;
  isChecking = false;

  constructor(private todoDataService: TodoDataService) { }

  /**
   * Implement this method to initialize all necessary data we need to paint the page.
   * Hint: use this.todoDataService.getAllTodos()
   */
  ngOnInit(): void {
  }

  /**
   * Implement this method to check all todo items.
   * Hint: use this.todoDataService.checkAllTodos()
   */
  checkAll(): void {
  }

  /**
   * Implement this method to check the selected todo item.
   * Hint: use this.todoDataService.checkTodo()
   * @param todo The selected todo item
   * @param todoGroup The group the todo item belongs to
   */
  check(todo: Todo, todoGroup: TodoGroup): void {
  }

  /**
   * Implement this method to uncheck the selected todo item.
   * Hint: use this.todoDataService.uncheck()
   * @param todo The selected todo item
   * @param todoGroup The group the todo item belongs to
   */
  uncheck(todo: Todo, todoGroup: TodoGroup): void {
  }

  /**
   * Implement this method to toggle the expanded icon.
   * @param type
   */
  toggleExpanded(type: string): void {
  }

  /**
   * Implement this method to check if the selected type is expanded.
   * @param type
   */
  isExpanded(type: string): boolean {
    return true;
  }

  /**
   * Implement this method to check if we should show this todo group.
   * We should not show the group if all todo items are checked in this group.
   * @param group
   */
  showTodoGroup(group: TodoGroup): boolean {
    return true;
  }

  /**
   * Implement this method to check if all todo items are checked.
   */
  allChecked(): boolean {
    return false;
  }

  buildExpandIconCssClass(type: string): string {
    if (this.expanded.get(type)) {
      return 'tb-icon--down';
    } else {
      return 'tb-icon--right';
    }
  }
}
