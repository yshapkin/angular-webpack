import { Component, OnInit } from '@angular/core';

import {
    UserModel,
    PostsService
} from '../shared';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    posts: UserModel[] = null;

    constructor(private postsSrv: PostsService) {
    }

    ngOnInit() {
        this.postsSrv.getPosts().subscribe((t) =>  this.posts = t);
    }
}
