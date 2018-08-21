import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullScreenMapComponent } from '@app/shared/ui/maps/full-screen-map/full-screen-map.component';
import { GoogleMapComponent } from '@app/shared/ui/maps/google-map/google-map.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: FullScreenMapComponent,
        data: {
          title: 'Full Screen Map'
        }
      },
      {
        path: 'google',
        component: GoogleMapComponent,
        data: {
          title: 'Google Map'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule {}
