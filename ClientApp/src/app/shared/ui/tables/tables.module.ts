import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from '@app/shared/ui/tables/tables-routing.module';

import { ExtendedTableComponent } from '@app/shared/ui/tables/extended/extended-table.component';
import { RegularTableComponent } from '@app/shared/ui/tables/regular/regular-table.component';
import { SmartTableComponent } from '@app/shared/ui/tables/smart-data-table/smart-data-table.component';

@NgModule({
  imports: [SharedModule, TablesRoutingModule, Ng2SmartTableModule],
  declarations: [
    ExtendedTableComponent,
    RegularTableComponent,
    SmartTableComponent
  ]
})
export class TablesModule {}
