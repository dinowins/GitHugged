import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getProfile(userName){
    return this.http.get(`https://api.github.com/users/${userName}/repos?per_page=100&sort=author-date-asc`);
  }

}