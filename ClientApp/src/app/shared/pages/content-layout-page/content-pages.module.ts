import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ContentPagesRoutingModule } from '@app/shared/pages/content-layout-page/content-pages-routing.module';
import { ContentLayoutPageComponent } from '@app/shared/pages/content-layout-page/content-layout-page.component';

@NgModule({
  imports: [SharedModule, ContentPagesRoutingModule],
  declarations: [ContentLayoutPageComponent]
})
export class ContentPagesModule {}
