import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeLogComponent } from '@app/changelogs/changelog.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeLogComponent,
    data: {
      title: 'ChangeLog'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeLogRoutingModule {}
