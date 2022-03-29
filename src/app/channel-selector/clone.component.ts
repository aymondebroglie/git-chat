import {Component, Input, OnInit} from '@angular/core';
import {GitService} from "../git-service.service";

@Component({
    selector: 'app-clone',
    templateUrl: './clone.component.html',
    styleUrls: ['./clone.component.css']
})
export class CloneComponent implements OnInit {

    @Input() repoUrl: string = ''
    repoCloned: boolean = false;
    repoDir: string = '';

    constructor(private git: GitService) {
    }

    ngOnInit(): void {
        this.git.cloneRepo(this.repoUrl).then(repoDir => {
            this.repoCloned = true;
            this.repoDir = repoDir
        });
    }


}
