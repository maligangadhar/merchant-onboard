import { NgModule } from '@angular/core';
import { ActionViewComponent } from './action-view.component';
import { ApplicationRoutingModule } from './action-routing.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
@NgModule({
    imports: [
        ApplicationRoutingModule,
        TableModule,
        FormsModule,
        CommonModule,
        NgbModule,
        ButtonModule,
        PanelModule,
        Ng2Charts
    ],
    declarations: [ActionViewComponent]
})
export class ActionViewModule {}
