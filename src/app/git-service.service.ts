import {Injectable} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
import {clone} from 'isomorphic-git'
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    dir: string;
    http_any : any;

    constructor(private http : HttpClient) {
        this.fs = new FS('fs');
        this.dir = './test-clone'
        this.http_any = this.http
    }

    cloneRepo() {
        // @ts-ignore
        clone({
            fs: this.fs, 'http': this.http_any, dir: this.dir, url: 'test'
        }).then(console.log)
    }

}
