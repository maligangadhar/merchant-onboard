import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-chart',
  templateUrl: './application-chart.component.html',
  styleUrls: ['./application-chart.component.scss']
})
export class ApplicationChartComponent implements OnInit {
  @Input() kyc: any;
  @Output() selectedChart = new EventEmitter();

  modalOptions: NgbModalOptions;
 
  public kycNotDone: number = 0;
  public processCompleted: number = 0;
  public limitSettingNotDone: number = 10;
  public limitSetting: number;
  // Pie
  public pieChartLabels: string[] = [
    'KYC: Not Done',
    'Limit Setting Not Done',
    'Process Completed'
  ];
  public pieChartType: String = 'pie';
  public pieChartData: number[] = [];
  // bar chart
  public filterBy = 'm';
  public barChartFilter = [
    { label: 'Weekly', value: 'w' },
    { label: 'Monthly', value: 'm' },
    { label: 'Quarterly', value: 'q' },
  ];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;
  public pieChartColors = [
    {
      backgroundColor: ['red', 'orange', 'green']
    },
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartData: any[] = [{ data: [65, 59, 80, 81, 56, 55, 40, 98, 45, 34, 23, 56], label: 'Monthly' }];
 // Bar Chart End

  constructor(private modalService: NgbModal) { }
  ngOnInit() {
     this.populateChartData();
  }
  populateChartData = () => {
    this.kycNotDone = 0;
    this.limitSettingNotDone = 0;
    setTimeout(() => {
      if (this.kyc && this.kyc['data']) {
          this.kyc['data'].forEach(( item => {
            if (item.kyc === 'Yes' && item.limitSetting === 'Yes') {
              this.processCompleted = this.processCompleted + 1;
            } else if (item.kyc === 'Yes' && item.limitSetting === 'No') {
              this.limitSettingNotDone = this.limitSettingNotDone + 1;
            } else if (item.kyc === 'No') {
              this.kycNotDone = this.kycNotDone + 1;
            }
        }));
      }
     // this.pieChartData = [this.kycNotDone, this.kycDone ];
      this.limitSetting = (this.kyc && this.kyc['limitSetting']) ? this.kyc['limitSetting'] : 0;
     // this.processCompleted = (this.kyc && this.kyc['processCompleted']) ? this.kyc['processCompleted'] : 0;
    }, 50);
  }

  // events
  public chartClicked(e: any): void {
    this.selectedChart.emit(e.active[0]._index);

  }
  /**
   * application chart clicked
   * @param e 
   */
  public appChartClicked(content): void {
    this.modalService.open(content, this.modalOptions).result.then(
      result => {}
    );
  }
  
  /**
   *  select chart filter By
   */
  selectChart = () => {
    if (this.filterBy === 'm') {
      this.barChartLabels = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      this.barChartData = [{ data: [65, 59, 80, 81, 56, 55, 40, 98, 45, 34, 23, 56], label: 'Monthly' }];
    } else if (this.filterBy === 'q') {
      this.barChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
      this.barChartData = [{ data: [60, 70, 55, 75], label: 'Quarterly' }];
    } else {
      this.barChartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      this.barChartData = [{ data: [64, 80, 71, 76], label: 'Monthly' }];
    }
  }
}
