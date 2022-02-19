import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Task Interface
import { Task } from '../../Task';
// Font Awesome Icon
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // Icon Delete
  faTimes = faTimes;

  // Inputs (Props)
  @Input() task: Task;
  // Output (Event Emitter)
  @Output() onDeleteClick: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteClick.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
