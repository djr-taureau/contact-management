import { Component } from '@angular/core';

declare var require: any;
const data: any = require('@data/company.json');

@Component({
  selector: 'app-dt-editing',
  templateUrl: './dt-editing.component.html',
  styleUrls: ['./dt-editing.component.scss']
})
export class DTEditingComponent {
  editing = {};
  rows = [];

  constructor() {
    this.rows = data;
  }

  // Editing content code
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }
}
