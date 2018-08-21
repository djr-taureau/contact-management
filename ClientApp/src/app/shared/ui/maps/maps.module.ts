import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { AgmCoreModule } from '@agm/core';
import { MapsRoutingModule } from '@app/shared/ui/maps/maps-routing.module';

import { FullScreenMapComponent } from '@app/shared/ui/maps/full-screen-map/full-screen-map.component';
import { GoogleMapComponent } from '@app/shared/ui/maps/google-map/google-map.component';

@NgModule({
  imports: [SharedModule, MapsRoutingModule, AgmCoreModule],
  declarations: [FullScreenMapComponent, GoogleMapComponent]
})
export class MapsModule {}
