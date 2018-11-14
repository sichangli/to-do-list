import {Component, Input, OnInit} from '@angular/core';

const defaultClass = 'tb-btn';
const disabledClass = 'tb-btn--disabled-quiet';
const inProgressClass = 'tb-btn--primary--inprogress';
const persistentClass = '';

@Component({
  selector: 'todo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() inProgress: boolean;
  @Input() selected: boolean;
  @Input() defaultClass = defaultClass;
  @Input() persistentClass = persistentClass;
  @Input() selectedClass = defaultClass;

  /**
   * Gets button class based on its state.
   */
  getDynamicButtonClasses(): string {
    if (this.disabled) {
      return `${disabledClass} ${this.persistentClass}`;
    }
    if (this.inProgress) {
      return `${inProgressClass} ${this.persistentClass}`;
    }
    if (this.selected) {
      return `${this.selectedClass} ${this.persistentClass}`;
    }
    return `${this.defaultClass} ${this.persistentClass}`;
  }
}
