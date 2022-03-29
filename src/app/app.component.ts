import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GlobalInformation} from "./global.information";
import {resetInformation} from "./store/repo.actions";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'git-chat';
    information$: Observable<GlobalInformation>

    constructor(private store: Store<{ information: GlobalInformation }>) {
        this.information$ = store.select('information')
    }

    ngOnInit(): void {
    }

    resetInformation(): void {
        this.store.dispatch(resetInformation());
    }
}
