import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { ChatRoutingModule } from '@app/shared/ui/chat/chat-routing.module';

import { ChatComponent } from '@app/shared/ui/chat/chat.component';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule {}
