import { NgModule } from '@angular/core';
import { SharedModule } from "@app/shared";

import {
  NgbModalModule,
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { CalendarRoutingModule } from '@app/shared/ui/calendar/calendar-routing.module';

import { CalendarsComponent } from '@app/shared/ui/calendar/calendars.component';
import { DateTimePickerComponent } from '@app/shared/ui/calendar/date-time-picker.component';

@NgModule({
  imports: [
    SharedModule,
    CalendarRoutingModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),

  ],
  declarations: [CalendarsComponent, DateTimePickerComponent]
})
export class CalendarsModule {}
