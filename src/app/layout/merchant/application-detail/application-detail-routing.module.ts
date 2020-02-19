import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationDetailComponent } from './application-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ApplicationDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationDetailRoutingModule {}
