import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/hopscotch.min.js');
    $.getScript('./assets/js/tour.js');
    $.getScript('./assets/js/prism.min.js');
  }

}
