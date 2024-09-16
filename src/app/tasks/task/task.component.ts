import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model'; // Import "Task" type
import { DatePipe } from '@angular/common'
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  imports: [CardComponent, DatePipe],
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }

}
