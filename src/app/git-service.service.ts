import {Injectable} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
import {clone} from 'isomorphic-git'

// @ts-ignore
import * as http from 'stream-http'

@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    dir: string;

    constructor() {
        this.fs = new FS('fs');
        this.dir = '/test-clone'
    }

    cloneRepo(repoUrl: string) {
        console.log(http)
        clone(
            {dir: this.dir, fs: this.fs, http: http, url: repoUrl})
    }

}
