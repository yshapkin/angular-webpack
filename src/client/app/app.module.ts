import './vendor.ts';

import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './app.route';

import {
    MainComponent,
    NavbarComponent,
    FooterComponent
} from './layouts';

@NgModule({
    imports: [
        Ng2Webstorage.forRoot({ prefix: 'app', separator: '-'}),
        SharedModule,
        RoutingModule,
        HomeModule
    ],
    exports: [
        SharedModule,
    ],
    declarations: [
        MainComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
    ],
    bootstrap: [ MainComponent ]
})
export class AppModule {}
