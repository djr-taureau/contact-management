import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Task } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx.model';

import { Store } from '@ngrx/store';
import { Observable ,  Subscription } from 'rxjs';

import * as TaskboadActions from '@app/shared/ui/taskboard-ngrx/store/taskboard.actions';
import * as fromTaskboard from '@app/shared/ui/taskboard-ngrx/store/taskboard.reducers';

@Component({
  selector: 'app-ngrx-taskboard',
  templateUrl: './taskboard-ngrx.component.html',
  styleUrls: ['./taskboard-ngrx.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardNGRXComponent implements OnInit {

  @ViewChild('todoTitle') titleInputRef: ElementRef;
  @ViewChild('todoMessage') messageInputRef: ElementRef;
  subscription: Subscription;
  taskboardState: Observable<fromTaskboard.State>;

  public todo: Task[];
  public inProcess: Task[];
  public backLog: Task[];
  public completed: Task[];

  constructor(private elRef: ElementRef, private store: Store<fromTaskboard.FeatureState>) {

  }

  ngOnInit() {
    this.taskboardState = this.store.select('task');
    this.subscription = this.taskboardState.subscribe(
      data => {
        this.todo = data.todo;
        this.inProcess = data.inProcess;
        this.backLog = data.backLog;
        this.completed = data.completed;
      }
    );
  }

  onAddTask() {
    if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
      this.store.dispatch(new TaskboadActions.AddTodo(new Task(
        this.titleInputRef.nativeElement.value,
        this.messageInputRef.nativeElement.value,
        'Nov 12',
        'Elizabeth Elliott',
        'assets/img/portrait/small/avatar-s-3.png',
        'New'
      )));
    }
    this.titleInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    this.titleInputRef.nativeElement.focus();
  }


}
