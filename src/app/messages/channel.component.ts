import {Component, Input, OnInit} from '@angular/core';
import {GitService} from "../git-service.service";
import {EMPTY, interval, Observable} from "rxjs";
import {ReadCommitResult} from "isomorphic-git";

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

    constructor(private git: GitService) {
    }

    @Input() repoDir: string = '';

    messages$: Observable<Array<ReadCommitResult>> = EMPTY;

    ngOnInit(): void {
        this.messages$ = interval(60000)
            .pipe(i => this.git.gitFetch(this.repoDir)).pipe(f => this.git.messages(this.repoDir))
    }

}
