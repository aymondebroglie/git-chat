import { Component } from '@angular/core';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-chat';

  constructor(private repository :  RepositoryService){}

  urlSet() : boolean{
   return this.repository.getUrl != null; 
  }
}
