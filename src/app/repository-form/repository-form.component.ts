import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setUrl } from '../store/repo.actions';

@Component({
  selector: 'repository-form',
  templateUrl : './repository-form.component.html'
})
export class FavoriteColorComponent {

    constructor(private store : Store<{url : (string | null)}>) {
      
    }
    repositoryUrl = new FormControl('',{ validators : Validators.required});



  onSubmit() : void {
    this.store.dispatch(setUrl({repo_url : this.repositoryUrl.value}));
  } 
}