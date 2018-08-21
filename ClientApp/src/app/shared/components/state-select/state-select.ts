import { Component } from '@angular/core';
import { State, states } from '@app/shared/components/state-select/states';

@Component({
  selector: 'state-select',
  template: `
    <ng-select [allowClear]="true"
      [items]="options"
      (data)="refreshValue($event)"
      (selected)="selected($event)"
      (removed)="removed($event)"
      (typed)="typed($event)"
      placeholder="State">
    </ng-select>
  `,
  styles: [``]
})
export class StateSelectComponent {
  constructor() {}

  public items: Array<State> = states;
  private value: any = {};

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
}
