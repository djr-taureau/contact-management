import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsRoutingModule } from '@app/shared/ui/charts/charts-routing.module';

import { ChartistComponent } from '@app/shared/ui/charts/chartist/chartist.component';
import { ChartjsComponent } from '@app/shared/ui/charts/chartjs/chartjs.component';
import { NGXChartsComponent } from '@app/shared/ui/charts/ngx-charts/ngx-charts.component';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule,
        ChartsModule,
        ChartistModule,
        NgxChartsModule
    ],
    declarations: [
        ChartistComponent,
        ChartjsComponent,
        NGXChartsComponent
    ],
})
export class ChartsNg2Module { }
