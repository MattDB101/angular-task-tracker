import { Component, EventEmitter, Output, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() emitCloseForm = new EventEmitter<void>();

  titleInput = '';
  summaryInput = '';
  dateInput = '';
  private tasksService = inject(TasksService)

  onCancel() {
    this.emitCloseForm.emit();
  }

  submitTask() {
    this.tasksService.addTask({
      title: this.titleInput,
      summary: this.summaryInput,
      date: this.dateInput
    },
      this.userId
    )

    this.onCancel()
  }

}
