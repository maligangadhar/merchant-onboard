import { NgModule } from '@angular/core';
import { ApplicationDetailComponent} from './application-detail.component';
import { ApplicationDetailRoutingModule } from './application-detail-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ApplicationDetailRoutingModule, TableModule, FormsModule, CommonModule],
  declarations: [ApplicationDetailComponent],
})
export class ApplicationDetailModule { }
