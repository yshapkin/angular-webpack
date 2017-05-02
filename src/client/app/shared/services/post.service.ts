import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from './base.service';
import { UserModel } from '../../shared';

@Injectable()
export class PostsService extends BaseService {
    private apiRoute = '/posts/';

    public getPosts(): Observable<UserModel[]> {
        return this.get(this.apiRoute)
            .map((res: Response) => res.json() as UserModel[]);
    }
}