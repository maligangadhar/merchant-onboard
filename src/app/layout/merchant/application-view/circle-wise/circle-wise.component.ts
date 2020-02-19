import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../../../apis/merchant.service';

@Component({
    selector: 'app-circle-wise',
    templateUrl: './circle-wise.component.html',
    styleUrls: ['./circle-wise.component.scss']
})
export class CircleWiseComponent implements OnInit {
    cols: { field: string; header: string }[];
    circleDataList: any;
    constructor(private merchantService: MerchantService) {}

    ngOnInit() {
        this.cols = [
            { field: 'label', header: 'Circle Name' },
            { field: 'count', header: '# applications processed' },
            { field: 'target', header: 'Target' },
            { field: 'achievement', header: 'Achievement (in%) ' }
        ];
        this.getCircleWiseDetails();
    }
    getCircleWiseDetails = () => {
        this.merchantService.getCircleDetails().subscribe(response => {
            this.circleDataList = response;
        });
    }
}
