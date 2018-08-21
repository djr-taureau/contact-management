import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartistComponent } from '@app/shared/ui/charts/chartist/chartist.component';
import { ChartjsComponent } from '@app/shared/ui/charts/chartjs/chartjs.component';
import { NGXChartsComponent } from '@app/shared/ui/charts/ngx-charts/ngx-charts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chartist',
        component: ChartistComponent,
        data: {
          title: 'Chartist'
        }
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
          title: 'Chartjs'
        }
      },
      {
        path: 'ngx',
        component: NGXChartsComponent,
        data: {
          title: 'NGX Charts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {}
