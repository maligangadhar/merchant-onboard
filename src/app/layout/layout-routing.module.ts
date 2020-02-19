import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'landingView', pathMatch: 'prefix' },
            { path: 'landingView', loadChildren: './components/landing/landing.module#LandingModule' },
            { path: 'applicationView', loadChildren: './merchant/application-view/application.module#ApplicationViewModule' },
            { path: 'actionView', loadChildren: './merchant/action-view/action-view.module#ActionViewModule' },
            { path: 'detailView', loadChildren: './merchant/application-detail/application-detail.module#ApplicationDetailModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
