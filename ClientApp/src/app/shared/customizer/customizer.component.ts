import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  ngOnInit() {
    // Customizer JS File
    $.getScript('./assets/js/customizer.js');
  }

}
