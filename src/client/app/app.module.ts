import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';

import { LayoutRoutingModule } from './layouts';

import {
    MainComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'app', separator: '-'}),
        SharedModule,
        HomeModule
    ],
    declarations: [
        MainComponent,
        NavbarComponent,
        ErrorComponent,
        FooterComponent
    ],
    providers: [
    ],
    bootstrap: [ MainComponent ]
})
export class AppModule {}
