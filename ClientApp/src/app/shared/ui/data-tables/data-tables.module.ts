import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesRoutingModule } from '@app/shared/ui/data-tables/data-tables-routing.module';

import { DTFullScreenComponent } from '@app/shared/ui/data-tables/fullscreen/dt-fullscreen.component';
import { DTEditingComponent } from '@app/shared/ui/data-tables/editing/dt-editing.component';
import { DTFilterComponent } from '@app/shared/ui/data-tables/filter/dt-filter.component';
import { DTPagingComponent } from '@app/shared/ui/data-tables/paging/dt-paging.component';
import { DTPinningComponent } from '@app/shared/ui/data-tables/pinning/dt-pinning.component';
import { DTSelectionComponent } from '@app/shared/ui/data-tables/selection/dt-selection.component';
import { DTSortingComponent } from '@app/shared/ui/data-tables/sorting/dt-sorting.component';
import { DTBasicComponent } from '@app/shared/ui/data-tables/basic/dt-basic.component';

@NgModule({
  imports: [CommonModule, DataTablesRoutingModule, NgxDatatableModule],
  declarations: [
    DTFullScreenComponent,
    DTEditingComponent,
    DTFilterComponent,
    DTPagingComponent,
    DTPinningComponent,
    DTSelectionComponent,
    DTSortingComponent,
    DTBasicComponent
  ]
})
export class DataTablesModule {}
