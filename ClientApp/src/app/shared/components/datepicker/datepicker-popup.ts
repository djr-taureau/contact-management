import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'cm-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class DatepickerPopupComponent {
  // @Input() model: any;
 // @Input() id: string;
  // @Input() required: boolean = false;
  // @Output() modelChange: EventEmitter<any> = new EventEmitter();
  d: any;
  model: NgbDateStruct;
  popupModel;
  customModel: NgbDateStruct;
  constructor() {}

  ngOnInit() {
    this.selectToday();
  }

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

}
