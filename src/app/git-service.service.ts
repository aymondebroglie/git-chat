import {Injectable} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
import * as git from 'isomorphic-git'
import * as http from 'isomorphic-git/http/web/index.js'
import {from, Observable} from 'rxjs'


@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    pfs: FS.PromisifiedFS

    constructor() {
        this.fs = new FS('fs');
        this.pfs = this.fs.promises
    }

    async cloneRepo(repoUrl: string): Promise<string> {
        const dirName = '/' + this.hash(repoUrl);
        console.log(dirName)

        await this.pfs.readdir(dirName)
            .catch(
                err => this.cloneRepoInDir(repoUrl, dirName)
            );

        return dirName;

    }

    async cloneRepoInDir(repoUrl: string, dirName: string) {
        await git.clone({
            fs: this.fs,
            http,
            dir: dirName,
            corsProxy: 'https://cors.isomorphic-git.org',
            url: repoUrl,
            ref: 'main',
            singleBranch: true,
        });

    }


    channels(dir: string): Observable<String[]> {
        return from(git.listBranches({fs: this.fs, dir: dir, remote: 'origin'}))
    }

    hash(s: string, seed = 186): string {
        // taken from stackoverflow  https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < s.length; i++) {
            ch = s.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return String(4294967296 * (2097151 & h2) + (h1 >>> 0));
    }

}
