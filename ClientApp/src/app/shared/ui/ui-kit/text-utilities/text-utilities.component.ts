import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-text-utilities',
    templateUrl: './text-utilities.component.html',
    styleUrls: ['./text-utilities.component.scss']
})

export class TextUtilitiesComponent implements OnInit {
  
    //  Prism js for code formating
    ngOnInit() { 
        $.getScript('./assets/js/prism.min.js');
    }
}