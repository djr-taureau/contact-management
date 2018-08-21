import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from '@app/shared/ui/player/player.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    data: {
      title: 'Player'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {}
