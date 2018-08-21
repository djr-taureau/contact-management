import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DTFullScreenComponent } from '@app/shared/ui/data-tables/fullscreen/dt-fullscreen.component';
import { DTEditingComponent } from '@app/shared/ui/data-tables/editing/dt-editing.component';
import { DTFilterComponent } from '@app/shared/ui/data-tables/filter/dt-filter.component';
import { DTPagingComponent } from '@app/shared/ui/data-tables/paging/dt-paging.component';
import { DTPinningComponent } from '@app/shared/ui/data-tables/pinning/dt-pinning.component';
import { DTSelectionComponent } from '@app/shared/ui/data-tables/selection/dt-selection.component';
import { DTSortingComponent } from '@app/shared/ui/data-tables/sorting/dt-sorting.component';
import { DTBasicComponent } from '@app/shared/ui/data-tables/basic/dt-basic.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: DTFullScreenComponent,
        data: {
          title: 'Full Screen Data Table'
        }
      },
      {
        path: 'editing',
        component: DTEditingComponent,
        data: {
          title: 'Editing Data Table'
        }
      },
      {
        path: 'filter',
        component: DTFilterComponent,
        data: {
          title: 'Filter Data Table'
        }
      },
      {
        path: 'paging',
        component: DTPagingComponent,
        data: {
          title: 'Paging Data Table'
        }
      },
      {
        path: 'pinning',
        component: DTPinningComponent,
        data: {
          title: 'Pinning Data Table'
        }
      },
      {
        path: 'selection',
        component: DTSelectionComponent,
        data: {
          title: 'Selection Data Table'
        }
      },
      {
        path: 'sorting',
        component: DTSortingComponent,
        data: {
          title: 'Sorting Data Table'
        }
      },
      {
        path: 'basic',
        component: DTBasicComponent,
        data: {
          title: 'Basic Data Table'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule {}
