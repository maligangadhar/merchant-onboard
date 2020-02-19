import { NgModule } from '@angular/core';
import { ApplicationViewComponent} from './application-view.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/panel';
import { ApplicationChartComponent } from './application-chart/application-chart.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DropdownModule } from 'primeng/dropdown';
import { StatModule } from '../../../shared/modules/stat/stat.module';
import { ApplicationMapComponent } from './application-map/application-map.component';
import { AgmCoreModule } from '@agm/core';
import { CircleWiseComponent } from './circle-wise/circle-wise.component';
@NgModule({
    imports: [
        ApplicationRoutingModule,
        TableModule,
        FormsModule,
        CommonModule,
        NgbModule,
        PanelModule,
        Ng2Charts,
        DropdownModule,
        ButtonModule,
        StatModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBnTxC9-LSQiSH0KjRnqW-iXbwgklajtZs'
        })
    ],
    declarations: [ApplicationViewComponent, ApplicationChartComponent, ApplicationMapComponent, CircleWiseComponent]
})
export class ApplicationViewModule {}
