import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repositoryUrl : string | null  = null;


  setUrl(url : string ){
    this.repositoryUrl = url;
  }

  getUrl() :  (string  | null) {
      return this.repositoryUrl;
  }
  
}
