import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

declare var require: any;
const data: any = require('@data/company.json');

@Component({
  selector: 'app-dt-filter',
  templateUrl: './dt-filter.component.html',
  styleUrls: ['./dt-filter.component.scss']
})
export class DTFilterComponent {
  rows = [];

  temp = [];

  // Table Column Titles
  columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor() {
    this.temp = [...data];
    this.rows = data;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
