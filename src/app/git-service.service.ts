import {Injectable, Input} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
import {clone} from 'isomorphic-git'

@Injectable({
    providedIn: 'root'
})
export class GitService {
    fs: FS;
    dir: string;

    constructor() {
        this.fs = new FS('fs');
        this.dir = './test-clone'
    }

    cloneRepo( repoUrl : string ) {
        console.log("Cloning the repo " + repoUrl )
    }

}
