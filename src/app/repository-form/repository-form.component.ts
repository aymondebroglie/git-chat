import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {setInformation} from '../store/repo.actions';
import {GlobalInformation} from "../global.information";

@Component({
    selector: 'repository-form',
    templateUrl: './repository-form.component.html'
})
export class RepositoryFormComponent {
    information: GlobalInformation = {repoUrl: 'https://github.com/aymondebroglie/test-for-chat.git',
         name: 'me'}


    constructor(private store: Store<{ information: GlobalInformation }>) {

    }


    onSubmit(): void {
        this.store.dispatch(setInformation({information: this.information}));
    }
}