import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

//Declarations
declare var require: any;
const data: any = require('@data/chartist.json');

//Interface
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent {
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

  // Line with Area Chart 2 Starts
  lineArea2: Chart = {
    type: 'Line',
    data: data['lineArea2'],
    options: {
      showArea: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none(),
      axisX: {
        showGrid: false
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50
      },
      chartPadding: { top: 0, right: 25, bottom: 0, left: 0 }
    },
    responsiveOptions: [
      [
        'screen and (max-width: 640px) and (min-width: 381px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 2 === 0 ? value : null;
            }
          }
        }
      ],
      [
        'screen and (max-width: 380px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 3 === 0 ? value : null;
            }
          }
        }
      ]
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs
          .elem('linearGradient', {
            id: 'gradient1',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
          })
          .elem('stop', {
            offset: 0.2,
            'stop-color': 'rgba(255, 255, 255, 1)'
          })
          .parent()
          .elem('stop', {
            offset: 1,
            'stop-color': 'rgba(38, 198, 218, 1)'
          });

        defs
          .elem('linearGradient', {
            id: 'gradient2',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
          })
          .elem('stop', {
            offset: 0.5,
            'stop-color': 'rgba(255, 255, 255, 1)'
          })
          .parent()
          .elem('stop', {
            offset: 1,
            'stop-color': 'rgba(255,141,96, 1)'
          });
      },
      draw(data: any): void {
        var circleRadius = 6;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line with Area Chart 2 Ends

  // Line with Area Chart 3 Starts
  lineArea3: Chart = {
    type: 'Line',
    data: data['lineArea3'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 50
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
      },

      draw(data: any): void {
        var circleRadius = 6;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line with Area Chart 3 Ends

  // Line with Area Chart 4 Starts
  lineArea4: Chart = {
    type: 'Line',
    data: data['lineArea4'],
    options: {
      // low: 650,
      low: 0,
      showArea: true,
      fullWidth: true
    }
  };
  // Line with Area Chart 4 Ends

  // Line Chart 1 Starts
  lineChart1: Chart = {
    type: 'Line',
    data: data['line1'],
    options: {
      axisX: {
        showGrid: false
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50
      },
      fullWidth: true,
      chartPadding: { top: 0, right: 25, bottom: 0, left: 0 }
    }
  };
  // Line Chart 1 Ends

  // Line Chart 2 Starts
  lineChart2: Chart = {
    type: 'Line',
    data: data['line2'],
    options: {
      axisX: {
        showGrid: false
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50
      },
      fullWidth: true,
      chartPadding: { top: 0, right: 25, bottom: 0, left: 0 }
    },
    responsiveOptions: [
      [
        'screen and (max-width: 640px) and (min-width: 381px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 2 === 0 ? value : null;
            }
          }
        }
      ],
      [
        'screen and (max-width: 380px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 3 === 0 ? value : null;
            }
          }
        }
      ]
    ],
    events: {
      draw(data: any): void {
        var circleRadius = 6;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: 'ct-point-circle'
          });

          data.element.replace(circle);
        }
      }
    }
  };
  // Line Chart 2 Ends

  // Line Chart 3 Starts
  lineChart3: Chart = {
    type: 'Line',
    data: data['Line3'],
    options: {
      axisX: { showGrid: false },
      axisY: {
        scaleMinSpace: 30
      },
      fullWidth: true,
      chartPadding: { top: 0, right: 50, bottom: 0, left: 0 }
    },
    responsiveOptions: [
      [
        'screen and (max-width: 640px) and (min-width: 381px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 2 === 0 ? value : null;
            }
          }
        }
      ],
      [
        'screen and (max-width: 380px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 3 === 0 ? value : null;
            }
          }
        }
      ]
    ]
  };
  // Line Chart 3 Ends

  // Scatter Line Chart Starts
  scatterlineChart: Chart = {
    type: 'Line',
    data: data['ScatterLine'],
    options: {
      axisX: { showGrid: false },
      axisY: {
        scaleMinSpace: 30
      },
      fullWidth: true
    },
    responsiveOptions: [
      [
        'screen and (max-width: 640px) and (min-width: 381px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 2 === 0 ? value : null;
            }
          }
        }
      ],
      [
        'screen and (max-width: 380px)',
        {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 3 === 0 ? value : null;
            }
          }
        }
      ]
    ]
  };
  // Scatter Line Chart Ends

  // Scatter Chart Starts
  scatterChart: Chart = {
    type: 'Line',
    data: data['Scatter'],
    options: {
      showLine: false,
      axisX: {
        labelInterpolationFnc: function(value: number, index: number): string {
          return index % 13 === 0 ? `W${value}` : null;
        },
        showGrid: false
      },
      axisY: {
        scaleMinSpace: 30
      }
    },
    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function(
              value: number,
              index: number
            ): string {
              return index % 4 === 0 ? `W${value}` : null;
            }
          }
        }
      ]
    ]
  };
  // Scatter Chart Ends

  // Bi-polar Line Chart Starts
  biPolarLineChart: Chart = {
    type: 'Line',
    data: data['Bi-PolarLine'],
    options: {
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false,
        offset: 100,
        labelInterpolationFnc: function(value: number, index: number): number {
          return index % 2 === 0 ? value : null;
        }
      },
      axisY: {
        scaleMinSpace: 30
      }
    }
  };
  // Bi-polar Line Chart Ends

  // Bar Chart Starts
  barChart: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 21,
      axisX: {
        showGrid: false,
        offset: 100
      },
      axisY: {
        scaleMinSpace: 30
      }
    }
  };
  // Bar Chart Ends

  // Distributed Series Bar Chart Starts
  distributedSeriesBarChart: Chart = {
    type: 'Bar',
    data: data['DistributedSeries'],
    options: {
      showGrid: false,
      distributeSeries: true,
      axisY: {
        scaleMinSpace: 30
      }
    }
  };
  // Distributed Series Bar Chart Ends

  // Donut Chart 1 Starts
  donutChart1: Chart = {
    type: 'Pie',
    data: data['donut'],
    options: {
      donut: true,
      donutWidth: 60,
      startAngle: 270,
      total: 200,
      showLabel: true
    }
  };
  // Donut Chart 1 Ends

  // Donut Chart 2 Starts
  donutChart2: Chart = {
    type: 'Pie',
    data: data['donut'],
    options: {
      donut: true,
      showLabel: true,
      labelDirection: 'implode'
    }
  };
  // Donut Chart 2 Ends
}
