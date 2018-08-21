import { Component } from '@angular/core';

@Component({
    selector: 'app-full-screen-map',
    templateUrl: './full-screen-map.component.html',
    styleUrls: ['./full-screen-map.component.scss']
})

export class FullScreenMapComponent {
    // Google map lat-long
    lat: number = 51.678418;
    lng: number = 7.809007;
}