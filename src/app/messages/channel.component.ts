import {Component, Input, OnInit} from '@angular/core';
import {GitService} from "../git-service.service";
import {EMPTY, interval, map, Observable, switchMap} from "rxjs";
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
        // interval(60000).subscribe( x => this.git.gitFetch(this.repoDir).subscribe(
        //     f => this.messages$ = this.git.messages(this.repoDir)
        // ))

        this.fetchAndGetMessages()

        interval(60000).subscribe(x => this.fetchAndGetMessages())
    }

    fetchAndGetMessages() {
        this.messages$ = this.git.gitFetch(this.repoDir).pipe(
            switchMap(f => this.git.messages(this.repoDir)),map( m => m.reverse() )
        )
    }

}
