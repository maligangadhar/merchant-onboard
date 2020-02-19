import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BroadcastService } from '../../../apis/broadcast.service';
import { IKeyData } from '../../../models/viewModels';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    collapsed = false;
    showMenu = '';
    pushRightClass = 'push-right';
    modalOptions: NgbModalOptions;
    pageChange: Boolean = false;
    @Output() collapsedEvent = new EventEmitter<boolean>();
    constructor(public router: Router, public modalService: NgbModal, private broadcast: BroadcastService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
               this.toggleSidebar();
            }
        });
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };

        this.broadcast.DataChange.subscribe((result: IKeyData) => {
            if ('pageChange' === result.key && result.data === 1) {
                this.pageChange = true;
            } else {
                this.pageChange = false;
            }
        });
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    navToPage = (page, content) => {
        if (this.pageChange) {
          this.open(content, page);
        } else {
            this.router.navigate([page]);
        }
        this.broadcast.broadcast('pageChange', 0);
    }
    open(content, page) {
        this.modalService.open(content, this.modalOptions).result.then(
            result => {
                if (result === 'Confirm') {
                    this.router.navigate([page]);
                } else {
                    this.pageChange = false;
                }
            }
        );
    }
}
