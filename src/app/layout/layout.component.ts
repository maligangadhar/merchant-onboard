import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BroadcastService } from '../apis/broadcast.service';
import { IKeyData } from '../models/viewModels';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;
    path: String = '';
    constructor(private router: Router, private broadcast: BroadcastService) {
        this.broadcast.DataChange.subscribe((result: IKeyData) => {
            if ('onboarding' === result.key) {
                this.path = result.data;
            }
        });
    }
    ngOnInit() {
       this.path =  this.router.url;
    }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
 
}
