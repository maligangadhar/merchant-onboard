import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MerchantService } from '../../../apis/merchant.service';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';

import {
    NgbModal,
    ModalDismissReasons,
    NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-application-view',
    templateUrl: './application-view.component.html',
    styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {
    @ViewChild('dt', { static: false }) dtRef: any;
    constructor(
        private merchantService: MerchantService,
        private modalService: NgbModal,
        private router: Router
    ) {
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    msgs: Message[] = [];
    cols: any[];
    loadMaps: Boolean = false;
    kycData: any;
    statusList: any[] = [];
    merchantDetailsList: any[] = [];
    circleDataList: any[] = [];
    statusFilter: String = '';
    modalOptions: NgbModalOptions;
    closeResult: String;
    filterStatus: String = 'Not Done';
    circleColumns: any[];
    appToggle: Boolean = false;
    toggleLabel: String = 'Application Status';
    iconView: String = 'pi pi-id-card';
    ngOnInit() {
        this.getViewDetails();

        this.cols = [
            { field: 'date', header: 'Date' },
            { field: 'appNo', header: 'App.No' },
            { field: 'kyc', header: 'Application Status' },
            { field: 'limitSetting', header: 'Limit Setting Done' },
            { field: 'description', header: 'Description' },
            { field: 'actions', header: 'Actions' }
        ];
        this.statusList.push(
            { label: 'All', value: null },
            { label: 'Done', value: 'Done' },
            { label: 'Not Done', value: 'Not Done' }
        );
    }
    open(content, appNo) {
        this.modalService
            .open(content, this.modalOptions)
            .result.then(result => {
                this.closeResult = `Closed with: ${result}`;
            });
    }
    confirm = appNo => {
        this.router.navigate(['actionView']);
    };
    /**
     *  get view details
     */
    getViewDetails = () => {
        this.merchantService.getMerchantDetails().subscribe(
            response => {
                this.merchantDetailsList = response.data;
                this.kycData = response;
                this.merchantDetailsList.forEach(item => {
                    if (item.kyc === 'Yes' && item.limitSetting === 'Yes') {
                        item.actions = 'Completed';
                    } else if (
                        item.kyc === 'Yes' &&
                        item.limitSetting === 'No'
                    ) {
                        item.actions = 'Confirm';
                    } else {
                        item.actions = 'Notify';
                    }
                });
                this.loadMaps = true;
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

    handleAppToggle = () => {
        if (this.appToggle) {
            this.appToggle = false;
            this.toggleLabel = 'Application Status';
            this.iconView = 'pi pi-id-card';
        } else {
            this.appToggle = true;
            this.toggleLabel = 'Home View';
            this.iconView = 'pi pi-home';
        }
    };
    /**
     * selected chart for Filter Grid
     */
    selectedChart = type => {
        this.handleClick();
        if (type === 0) {
            this.dtRef.filter('No', 'kyc', 'equals');
        } else if (type === 1) {
            this.dtRef.filter('Yes', 'kyc', 'equals');
            this.dtRef.filter('No', 'limitSetting', 'equals');
        } else if (type === 2) {
            this.dtRef.filter('Yes', 'limitSetting', 'equals');
        }
    };
    handleClick = () => {
        this.dtRef.reset();
    };
}
