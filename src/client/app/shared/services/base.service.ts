import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { API_HOST_BASE } from '../../shared';

@Injectable()
export abstract class BaseService<T> {
    protected ApiHostBase: string = API_HOST_BASE;

    constructor(protected httpSrv: Http) { }

    protected get<T>(apiRoute: string): Observable<T> {
        return this.httpSrv.get(API_HOST_BASE + apiRoute)
            .map((res: Response) => res.json() as T);
    }
}