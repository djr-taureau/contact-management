import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from '@app/shared/ui/inbox/inbox-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { InboxComponent } from '@app/shared/ui/inbox/inbox.component';

@NgModule({
  imports: [CommonModule, InboxRoutingModule, NgbModule, QuillModule],
  declarations: [InboxComponent]
})
export class InboxModule {}
