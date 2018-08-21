import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { PlayerRoutingModule } from '@app/shared/ui/player/player-routing.module';

import { PlayerComponent } from '@app/shared/ui/player/player.component';

@NgModule({
  imports: [
    SharedModule,
    PlayerRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {}
