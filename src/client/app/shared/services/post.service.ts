import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from './base.service';
import { UserModel } from '../../shared';

@Injectable()
export class PostsService extends BaseService<UserModel> {
    private apiRoute = '/posts/';

    public getPosts(): Observable<UserModel[]> {
        return this.get(this.apiRoute);
    }
}