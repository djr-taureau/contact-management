import { Component } from '@angular/core';

//Declarations
declare var require: any;
const data: any = require('@data/company.json');

@Component({
  selector: 'app-dt-sorting',
  templateUrl: './dt-sorting.component.html',
  styleUrls: ['./dt-sorting.component.scss']
})

export class DTSortingComponent {
  rows = [];
  columns = [
    { name: 'Company' },
    { name: 'Name' },
    { name: 'Gender' }
  ];

  constructor() {
    this.rows = data;
  }

}
