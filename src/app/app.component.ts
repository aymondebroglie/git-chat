import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, Observable} from 'rxjs';
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
    informationFilled$ : Observable<Boolean> 

    constructor(private store: Store<{ information: GlobalInformation }>) {
        this.information$ = store.select('information')
        this.informationFilled$ = this.information$.pipe(
            map(i => i.repoUrl == '' && i.name == ''))
    }

    ngOnInit(): void {
    }

    resetInformation(): void {
        this.store.dispatch(resetInformation());
    }
}
