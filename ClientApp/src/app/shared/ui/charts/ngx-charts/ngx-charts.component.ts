import { Component } from '@angular/core';
import {
  barChartSingle,
  barChartmulti,
  pieChartSingle,
  pieChartmulti,
  lineChartSingle,
  lineChartMulti,
  areaChartSingle,
  areaChartMulti
} from '@app/core/data/ngxChart';
import * as chartsData from '@app/shared/configs/ngx-charts.config';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NGXChartsComponent {
  //Chart Data
  lineChartMulti = lineChartMulti;
  areaChartMulti = areaChartMulti;
  barChartmulti = barChartmulti;
  pieChartSingle = pieChartSingle;

  //Bar Charts
  barChartView: any[] = chartsData.barChartView;

  // options
  barChartShowYAxis = chartsData.barChartShowYAxis;
  barChartShowXAxis = chartsData.barChartShowXAxis;
  barChartGradient = chartsData.barChartGradient;
  barChartShowLegend = chartsData.barChartShowLegend;
  barChartShowXAxisLabel = chartsData.barChartShowXAxisLabel;
  barChartXAxisLabel = chartsData.barChartXAxisLabel;
  barChartShowYAxisLabel = chartsData.barChartShowYAxisLabel;
  barChartYAxisLabel = chartsData.barChartYAxisLabel;
  barChartColorScheme = chartsData.barChartColorScheme;

  //Pie Charts

  pieChartView: any[] = chartsData.pieChartView;

  // options
  pieChartShowLegend = chartsData.pieChartShowLegend;

  pieChartColorScheme = chartsData.pieChartColorScheme;

  // pie
  pieChartShowLabels = chartsData.pieChartShowLabels;
  pieChartExplodeSlices = chartsData.pieChartExplodeSlices;
  pieChartDoughnut = chartsData.pieChartDoughnut;
  pieChartGradient = chartsData.pieChartGradient;

  pieChart1ExplodeSlices = chartsData.pieChart1ExplodeSlices;
  pieChart1Doughnut = chartsData.pieChart1Doughnut;

  //Line Charts

  lineChartView: any[] = chartsData.lineChartView;

  // options
  lineChartShowXAxis = chartsData.lineChartShowXAxis;
  lineChartShowYAxis = chartsData.lineChartShowYAxis;
  lineChartGradient = chartsData.lineChartGradient;
  lineChartShowLegend = chartsData.lineChartShowLegend;
  lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
  lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
  lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

  lineChartColorScheme = chartsData.lineChartColorScheme;

  // line, area
  lineChartAutoScale = chartsData.lineChartAutoScale;
  lineChartLineInterpolation = chartsData.lineChartLineInterpolation;

  //Area Charts

  areaChartView = chartsData.areaChartView;

  // options
  areaChartShowXAxis = chartsData.areaChartShowXAxis;
  areaChartShowYAxis = chartsData.areaChartShowYAxis;
  areaChartGradient = chartsData.areaChartGradient;
  areaChartShowLegend = chartsData.areaChartShowLegend;
  areaChartShowXAxisLabel = chartsData.areaChartShowXAxisLabel;
  areaChartXAxisLabel = chartsData.areaChartXAxisLabel;
  areaChartShowYAxisLabel = chartsData.areaChartShowYAxisLabel;
  areaChartYAxisLabel = chartsData.areaChartYAxisLabel;

  areaChartColorScheme = chartsData.areaChartColorScheme;

  // line, area
  areaChartAutoScale = chartsData.areaChartAutoScale;
  areaChartLineInterpolation = chartsData.areaChartLineInterpolation;

  constructor() {
    Object.assign(this, {
      barChartmulti,
      pieChartSingle,
      lineChartMulti,
      areaChartMulti
    });
  }

  onSelect(event) {
    //your code here
  }
}
