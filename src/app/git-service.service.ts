import {Injectable, Input} from '@angular/core';
import FS from '@isomorphic-git/lightning-fs'
// import {clone} from 'isomorphic-git'
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

    cloneRepo( repoUrl : string ) {
        console.log("Cloning the repo " + repoUrl )
    }

}
