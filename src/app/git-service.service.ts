import {Injectable} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
import * as git from 'isomorphic-git'
import * as http from 'isomorphic-git/http/web/index.js'



@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    pfs : FS.PromisifiedFS
    dir: string;

    constructor() {
        this.fs = new FS('fs');
        this.pfs = this.fs.promises
        this.dir = '/test-clone'
    }

    async cloneRepo(repoUrl: string) {
        // await this.pfs.mkdir(this.dir);
        console.log(repoUrl);
        await git.clone({
            fs : this.fs,
            http,
            dir : this.dir,
            corsProxy: 'https://cors.isomorphic-git.org',
            url: 'https://github.com/isomorphic-git/isomorphic-git',
            ref: 'main',
            singleBranch: true,
            depth: 10
        });
        await this.pfs.readdir(this.dir).then(console.log);
    }

}
