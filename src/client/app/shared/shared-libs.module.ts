import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        InfiniteScrollModule,
        BrowserModule
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        NgbModule,
        InfiniteScrollModule,
        BrowserModule
    ]
})
export class SharedLibsModule {
}
