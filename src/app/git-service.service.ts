import {Injectable} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'

// @ts-ignore
import {http }from 'stream-http'


@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    dir: string;
    http_any : any

    constructor() {
        this.fs = new FS('fs');
        this.dir = '/test-clone'
        this.http_any = http
    }

    cloneRepo(repoUrl: string) {

        // clone({
        //     fs: this.fs, http: this.http_any, dir: this.dir, url: repoUrl
        // }).then(console.log)
    }

}
