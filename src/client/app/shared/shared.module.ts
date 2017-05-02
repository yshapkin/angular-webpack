import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import {
    SharedLibsModule
} from './';

@NgModule({
    imports: [
        SharedLibsModule
    ],
    exports: [
        SharedLibsModule
    ],
    declarations: [
    ],
    providers: [
        CookieService
    ],
    entryComponents: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
