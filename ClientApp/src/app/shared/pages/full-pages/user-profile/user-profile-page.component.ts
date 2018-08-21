import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {

    //Variable Declaration
    currentPage: string = "About"

    ngOnInit() {
        // Horizontal Timeline js for user timeline
        $.getScript('./assets/js/vertical-timeline.js');
    }

    showPage(page: string) {
        this.currentPage = page;
    }
}