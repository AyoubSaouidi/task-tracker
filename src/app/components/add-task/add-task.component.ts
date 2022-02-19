import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
// Ui Service
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // Form Properties
  text: string;
  day: string;
  reminder: boolean = false;

  // Subscription
  showAddForm: boolean;
  subscription: Subscription;

  // Output
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddForm = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
  }
}
