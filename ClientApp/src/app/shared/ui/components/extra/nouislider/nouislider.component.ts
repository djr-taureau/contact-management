import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { NouiFormatter } from "ng2-nouislider";


export class TimeFormatter implements NouiFormatter {
  to(value: number): string {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = value - 60 * m - 3600 * h;
    let values = [h, m, s];
    let timeString: string = '';
    let i = 0;
    for(let v of values) {
      if(values[i] < 10)
        timeString += '0';
        timeString += values[i].toFixed(0);
      if(i < 2) {
        timeString += ':';
      }
      i++;
    }
    return timeString;
  };

  from(value: string): number {
    let v = value.split(':').map(parseInt);
    let time: number = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}


@Component({
    selector: 'app-nouislider',
    templateUrl: './nouislider.component.html',
    styleUrls: ['./nouislider.component.scss']
})

export class NouiSliderComponent implements OnInit {
  // Variable Declaration
  public disabled: boolean = false;
  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;

  public someValue: number = 5;
  public someMin: number = -10;
  public someMax: number = 10;
  public someRange: number[] = [3, 7];
  public someRange2: number[] = [10, 15];
  public someRange3: number[] = [2, 8];
  public someTime: number = 0;
  public someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    limit: 5,
    range: {
      min: 0,
      max: 20
    },
    pips: {
      mode: 'steps',
      density: 5
    }
  };

  // Keyboard Support
  public someKeyboard: number[] = [1, 3];

  // Keyboard Support Configuration
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };

  // With Custom Key Handler
  public someKeyboard2: number[] = [1, 3];
  public form1: FormGroup;
  public form2: FormGroup;

  // With Custom Key Handler Support
  public someTimeConfig: any = {
    start: 86400 / 2,
    range: {
      min: 0,
      max: 86399
    },
    tooltips: new TimeFormatter(),
    step: 1
  };

  constructor (
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit () {
    this.form1 = this.formBuilder.group({ 'single': [ 10 ] });
    this.form2 = this.formBuilder.group({ 'range': [ [ 2, 8 ] ] });
  }

  // EventHandler
  public someKeyboard2EventHandler = (e: KeyboardEvent) => {
   //your code here

    // determine which handle triggered the event
    let index = parseInt((<HTMLElement>e.target).getAttribute('data-handle'));

    let multiplier: number = 0;
    let stepSize = 0.1;

    switch ( e.which ) {
      case 40:  // ArrowDown
      case 37:  // ArrowLeft
        multiplier = -2;
        e.preventDefault();
        break;

      case 38:  // ArrowUp
      case 39:  // ArrowRight
        multiplier = 3;
        e.preventDefault();
        break;

      default:
        break;
    }

    let delta = multiplier * stepSize;
    let newValue = [].concat(this.someKeyboard2);
    newValue[index] += delta;
    this.someKeyboard2 = newValue;
  };

  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    },
    keyboard: true,
    onKeydown: this.someKeyboard2EventHandler,
  };
}