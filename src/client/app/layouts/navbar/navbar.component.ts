import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VERSION, DEBUG_INFO_ENABLED } from '../../app.constants';

@Component({
    selector: 'app-menu-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isNavbarCollapsed: boolean;

    constructor(
        private router: Router
    ) {
        this.isNavbarCollapsed = true;
    }

    ngOnInit() {
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
}
