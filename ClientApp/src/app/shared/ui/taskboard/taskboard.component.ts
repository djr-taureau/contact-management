import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { TaskBoardService } from '@app/shared/ui/taskboard/taskboard.service';
import { Task } from '@app/shared/ui/taskboard/taskboard.model';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent {
  @ViewChild('todoTitle') titleInputRef: ElementRef;
  @ViewChild('todoMessage') messageInputRef: ElementRef;

  public todo: Task[];
  public inProcess: Task[];
  public backLog: Task[];
  public completed: Task[];

  constructor(
    private elRef: ElementRef,
    private taskBoardService: TaskBoardService
  ) {
    this.todo = taskBoardService.todo;
    this.inProcess = taskBoardService.inProcess;
    this.backLog = taskBoardService.backLog;
    this.completed = taskBoardService.completed;
  }

  onAddTask() {
    if (
      this.messageInputRef.nativeElement.value != '' &&
      this.titleInputRef.nativeElement.value != ''
    ) {
      this.taskBoardService.addNewTask(
        this.titleInputRef.nativeElement.value,
        this.messageInputRef.nativeElement.value
      );
      this.todo = this.taskBoardService.gettodo();
    }
    this.titleInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.value = '';
    this.titleInputRef.nativeElement.focus();
  }
}
