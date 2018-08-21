import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtendedTableComponent } from '@app/shared/ui/tables/extended/extended-table.component';
import { RegularTableComponent } from '@app/shared/ui/tables/regular/regular-table.component';
import { SmartTableComponent } from '@app/shared/ui/tables/smart-data-table/smart-data-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'smart',
        component: SmartTableComponent,
        data: {
          title: 'Smart Table'
        }
      },
      {
        path: 'extended',
        component: ExtendedTableComponent,
        data: {
          title: 'Extended Table'
        }
      },
      {
        path: 'regular',
        component: RegularTableComponent,
        data: {
          title: 'Regular Table'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
