import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'repository-form',
  templateUrl : './repository-form.component.html'
})
export class FavoriteColorComponent implements OnInit{

    constructor(private repository : RepositoryService) {

    }
    repositoryUrl = new FormControl('',{ validators : Validators.required});


    ngOnInit(): void {
    console.log(this.repositoryUrl.value);
  }

  onSubmit() : void {
    this.repository.setUrl(this.repositoryUrl.value);
    console.log(this.repositoryUrl.value);
  } 
}