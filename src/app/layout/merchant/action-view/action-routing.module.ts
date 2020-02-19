import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionViewComponent } from './action-view.component';

const routes: Routes = [
    {
        path: '',
        component: ActionViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationRoutingModule {}
