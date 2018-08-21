import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'form-progres-bar',
  template: `
  <div class="meter">
    <span  [style.width]="width+'%'"></span>
  </div>
  `,
  styleUrls: ['./form-progress-bar.css']
})
export class FormProgressBarComponent {
  name = 'Angular 5';
  width: any = 0;

  constructor() {
    this.runProgressBar();
  }

  runProgressBar() {
    Observable.timer(0, 100)
      .takeWhile(() => this.isWidthWithinLimit())
      .subscribe(() => {
        this.width = this.width + 1;
        console.log(this.width);
      });
  }

  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
}
