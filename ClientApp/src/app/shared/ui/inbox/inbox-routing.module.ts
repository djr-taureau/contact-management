import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from '@app/shared/ui/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    data: {
      title: 'Inbox'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {}

export const routedComponents = [InboxComponent];
