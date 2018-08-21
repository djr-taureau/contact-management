import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { DashboardRoutingModule } from '@app/shared/ui/dashboard/dashboard-routing.module';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from '@app/shared/directives/match-height.directive';

import { Dashboard1Component } from '@app/shared/ui/dashboard/dashboard1/dashboard1.component';
import { Dashboard2Component } from '@app/shared/ui/dashboard/dashboard2/dashboard2.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    ChartistModule,
    NgbModule,
    MatchHeightModule
  ],
  exports: [],
  declarations: [Dashboard1Component, Dashboard2Component],
  providers: []
})
export class DashboardModule {}
