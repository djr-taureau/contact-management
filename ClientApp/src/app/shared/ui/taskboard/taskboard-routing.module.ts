import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskboardComponent } from '@app/shared/ui/taskboard/taskboard.component';

const routes: Routes = [
  {
    path: '',
    component: TaskboardComponent,
    data: {
      title: 'Taskboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule {}
