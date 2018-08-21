import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageComponent } from '@app/shared/pages/full-pages/gallery/gallery-page.component';
import { InvoicePageComponent } from '@app/shared/pages/full-pages/invoice/invoice-page.component';
import { HorizontalTimelinePageComponent } from '@app/shared/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component';
import { VerticalTimelinePageComponent } from '@app/shared/pages/full-pages/timeline/vertical/vertical-timeline-page.component';
import { UserProfilePageComponent } from '@app/shared/pages/full-pages/user-profile/user-profile-page.component';
import { SearchComponent } from '@app/shared/pages/full-pages/search/search.component';
import { FaqComponent } from '@app/shared/pages/full-pages/faq/faq.component';
import { KnowledgeBaseComponent } from '@app/shared/pages/full-pages/knowledge-base/knowledge-base.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery Page'
        }
      },
      {
        path: 'invoice',
        component: InvoicePageComponent,
        data: {
          title: 'Invoice Page'
        }
      },
      {
        path: 'horizontaltimeline',
        component: HorizontalTimelinePageComponent,
        data: {
          title: 'Horizontal Timeline Page'
        }
      },
      {
        path: 'verticaltimeline',
        component: VerticalTimelinePageComponent,
        data: {
          title: 'Vertical Timeline Page'
        }
      },
      {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'User Profile Page'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
      {
        path: 'kb',
        component: KnowledgeBaseComponent,
        data: {
          title: 'Knowledge Base'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPagesRoutingModule {}
