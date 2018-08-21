import { Component } from '@angular/core';

//declarations
declare var require: any;
const data: any = require('@data/employee.json');

@Component({
    selector: 'app-dt-fullscreen',
    templateUrl: './dt-fullscreen.component.html',
    styleUrls: ['./dt-fullscreen.component.scss']
})

export class DTFullScreenComponent {
    rows = [];
    constructor() {
        this.rows = data;
    }
}
