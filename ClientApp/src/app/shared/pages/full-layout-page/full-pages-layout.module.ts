import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { FullPagesRoutingModule } from '@app/shared/pages/full-layout-page/full-pages-routing.module';

import { FullLayoutPageComponent } from '@app/shared/pages/full-layout-page/full-layout-page.component';

@NgModule({
  imports: [SharedModule, FullPagesRoutingModule],
  declarations: [FullLayoutPageComponent]
})
export class FullPagesLayoutModule {}
