import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { StoreModule } from '@ngrx/store';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { ChatNGRXRoutingModule } from '@app/shared/ui/chat-ngrx/chat-ngrx-routing.module';

import { ChatComponent } from '@app/shared/ui/chat-ngrx/chat-ngrx.component';
import { chatReducer } from '@app/shared/ui/chat-ngrx/store/chat.reducers';

@NgModule({
  imports: [
    SharedModule,
    ChatNGRXRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    StoreModule.forFeature('chat', chatReducer)
  ],
  declarations: [ChatComponent]
})
export class ChatNGRXModule {}
