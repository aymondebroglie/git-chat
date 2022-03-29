import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {setInformation} from '../store/repo.actions';
import {GlobalInformation} from "../global.information";

@Component({
    selector: 'repository-form',
    templateUrl: './repository-form.component.html'
})
export class RepositoryFormComponent {
    information: GlobalInformation = {repoUrl: 'https://github.com/aymondebroglie/git-chat.git', name: 'ME'}


    constructor(private store: Store<{ url: (string | null) }>) {

    }


    onSubmit(): void {
        this.store.dispatch(setInformation({information: this.information}));
    }
}