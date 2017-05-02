import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { API_HOST_BASE } from '../../shared';

@Injectable()
export abstract class BaseService {
    protected ApiHostBase: string = API_HOST_BASE;

    constructor(protected httpSrv: Http) { }

    protected get(apiRoute: string): Observable<any> {
        return this.httpSrv.get(API_HOST_BASE + apiRoute);
    }
}