import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;

@Component({
  selector: 'todo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() id = `switch-${nextUniqueId++}`;
  @Input() checked: boolean;
  @Input() title: string;

  /**
   * An event is dispatched on every switch state change. Result event holds the current 'checked' property value.
   * @type {EventEmitter<boolean>}
   */
  @Output() checkedChange = new EventEmitter<boolean>();

  @ViewChild('input') private inputElement: ElementRef;

  onCheckedChange() {
    this.checked = this.inputElement.nativeElement.checked;
    this.checkedChange.emit(this.checked);
  }

}
