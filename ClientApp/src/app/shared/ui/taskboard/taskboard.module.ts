import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { DragulaModule } from 'ng2-dragula';
import { TaskboardRoutingModule } from '@app/shared/ui/taskboard/taskboard-routing.module';

import { TaskboardComponent } from '@app/shared/ui/taskboard/taskboard.component';

@NgModule({
  imports: [SharedModule, TaskboardRoutingModule, DragulaModule], // TODO: this needs to go in shared
  declarations: [TaskboardComponent]
})
export class TaskboardModule {}
