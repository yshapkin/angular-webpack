import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './layouts';

export const navbarRoute: RouterModule = {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar'
};

const LAYOUT_ROUTES = [
    navbarRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}