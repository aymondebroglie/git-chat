import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetUrl } from './store/repo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'git-chat';
  repoUrl$: Observable<(string | null)>;

  constructor(private store : Store<{url : (string | null)}>){
    this.repoUrl$ = store.select('url') 
  }

  ngOnInit(): void {
  }

  resetUrl() : void {
    this.store.dispatch(resetUrl());
  }
}
