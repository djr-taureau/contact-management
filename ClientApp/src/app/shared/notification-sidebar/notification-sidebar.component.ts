import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit {

  ngOnInit() {
    // notification-sidebar JS File
    $.getScript('./assets/js/notification-sidebar.js');
  }

}
