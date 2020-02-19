import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../../apis/merchant.service';
import { Message } from 'primeng/components/common/api';
import {
    NgbModal,
    ModalDismissReasons,
    NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BroadcastService } from '../../../apis/broadcast.service';

@Component({
    selector: 'app-action-view',
    templateUrl: './action-view.component.html',
    styleUrls: ['./action-view.component.scss']
})
export class ActionViewComponent implements OnInit {
    constructor(private merchantService: MerchantService, private router: Router, private broadcast: BroadcastService) {}
    msgs: Message[] = [];
    cols: any[];
    lineChartData: any[];
    lineChartLabels: any[];
    merchantActionDetailsList: any[] = [];
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public lineChartOptions: any = {
        responsive: true
    };
    modalOptions: NgbModalOptions;
    closeResult: string;
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '300,700',
        '700,1100',
        '1100,1500',
        '1500,1900',
        '1900,2300',
        '2300,2700'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Avg Transactions/day' },
    ];

    ngOnInit() {
        this.getActionViewDetails();
        this.cols = [
            { field: 'type', header: 'Type' },
            { field: 'recommendedValue', header: 'Recommended Value' },
            { field: 'value', header: 'Value' },
            { field: 'reasons', header: 'Reason (Basic recommendation)' }
        ];
    }
    getActionViewDetails = () => {
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Merchant 1' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Merchant 2' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Merchant 3' }
        ];
        this.lineChartLabels = ['Merchant 1', 'Merchant 2', 'Merchnat 3'];
        this.merchantService.getMerchantActionDetails().subscribe(
            response => {
                this.merchantActionDetailsList = response;
                this.merchantActionDetailsList.forEach(item => {
                    item.value = item.recommendedValue;
                });
            },
            error => {
                this.msgs.push({
                    severity: 'error',
                    summary: 'Error Message: ',
                    detail: error
                });
            }
        );
    };
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    /**
     * handle confirm for action view
     */
    handleConfirm = () => {
        this.router.navigate(['applicationView']);
    }
    recoChange = (event) => {
        this.broadcast.broadcast('pageChange', 1);
    }
}
