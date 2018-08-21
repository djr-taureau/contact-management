import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskboardNGRXComponent } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx.component';

const routes: Routes = [
  {
    path: '',
    component: TaskboardNGRXComponent,
    data: {
      title: 'Taskboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardNGRXRoutingModule {}
