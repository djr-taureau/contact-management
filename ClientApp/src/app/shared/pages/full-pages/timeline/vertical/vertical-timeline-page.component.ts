import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;
const data: any = require('@data/chartist.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-vertical-timeline-page',
  templateUrl: './vertical-timeline-page.component.html',
  styleUrls: ['./vertical-timeline-page.component.scss']
})
export class VerticalTimelinePageComponent implements OnInit {
  ngOnInit() {
    // Vertical Timeline JS
    $.getScript('./assets/js/vertical-timeline.js');
  }

  // Google map lat-long
  lat: number = 40.650002;
  lng: number = -73.949997;

  // Line with Area Chart 1 Starts
  lineArea1: Chart = {
    type: 'Line',
    data: data['lineArea1'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 50
      },
      axisX: {
        showGrid: false
      }
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs
          .elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
          })
          .elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
          })
          .parent()
          .elem('stop', {
            offset: 1,
            'stop-color': 'rgba(38, 198, 218, 1)'
          });
      }
    }
  };
  // Line with Area Chart 1 Ends
}
