import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FullPagesRoutingModule } from '@app/shared/pages/full-pages/full-pages-routing.module';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleryPageComponent } from '@app/shared/pages/full-pages/gallery/gallery-page.component';
import { InvoicePageComponent } from '@app/shared/pages/full-pages/invoice/invoice-page.component';
import { HorizontalTimelinePageComponent } from '@app/shared/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component';
import { HorizontalTimelineComponent } from '@app/shared/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component';
import { VerticalTimelinePageComponent } from '@app/shared/pages/full-pages/timeline/vertical/vertical-timeline-page.component';
import { UserProfilePageComponent } from '@app/shared/pages/full-pages/user-profile/user-profile-page.component';
import { SearchComponent } from '@app/shared/pages/full-pages/search/search.component';
import { FaqComponent } from '@app/shared/pages/full-pages/faq/faq.component';
import { KnowledgeBaseComponent } from '@app/shared/pages/full-pages/knowledge-base/knowledge-base.component';

@NgModule({
  imports: [
    SharedModule,
    FullPagesRoutingModule,
    ChartistModule,
    AgmCoreModule,
    NgbModule
  ],
  declarations: [
    GalleryPageComponent,
    InvoicePageComponent,
    HorizontalTimelinePageComponent,
    HorizontalTimelineComponent,
    VerticalTimelinePageComponent,
    UserProfilePageComponent,
    SearchComponent,
    FaqComponent,
    KnowledgeBaseComponent
  ]
})
export class FullPagesModule {}
