import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksComponent } from '../tasks.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task !: Task;
  @Output() complete = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }

}
