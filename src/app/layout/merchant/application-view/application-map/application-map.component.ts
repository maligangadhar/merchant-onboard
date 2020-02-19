import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MerchantService } from '../../../../apis/merchant.service';

@Component({
    selector: "app-application-map",
    styles: ["agm-map { height: 300px;}"],
    templateUrl: "./application-map.component.html"
})
export class ApplicationMapComponent implements OnInit {
    // google maps zoom level
    zoom: Number = 4;
    count: any;
    // initial center position for the map
    lat: Number = 20.593683;
    lng: Number = 78.962883;
    markers: marker[] = [];
    clickedMarker(label: string, index: number) {
        this.count = label;
    }
    constructor(private merchantService: MerchantService) {}

    ngOnInit() {
        this.getCircleWiseDetails();
    }

    getCircleWiseDetails = () => {
        this.merchantService.getCircleDetails().subscribe(response => {
            this.markers = response;
        });
    };
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  count: number;
  label?: string;
  draggable?: boolean;
}
