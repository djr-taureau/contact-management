import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { TaskboardNGRXRoutingModule } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx-routing.module';

import { TaskboardNGRXComponent } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx.component';
import { taskReducer } from '@app/shared/ui/taskboard-ngrx/store/taskboard.reducers';

@NgModule({
  imports: [
    SharedModule,
    TaskboardNGRXRoutingModule,
    DragulaModule,
    StoreModule.forFeature('task', taskReducer)
  ],
  declarations: [TaskboardNGRXComponent]
})
export class TaskboardNGRXModule {}
