import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends BaseApiService {

  user:User = new User();

  private static readonly apiURI:string = 'http://localhost:3000/sessions';


  constructor(private http: HttpClient) {

    super(); 

   }


  authenticate(user: User):Observable<User> {
    return this.http.post<User>(SessionService.apiURI, user, BaseApiService.defaultOptions)
    .pipe(
      map((user:User) => {
        this.doAuthenticate(user);
        return user;
      })
    )
  }

  private doAuthenticate(user:User) {
    this.user = user;
    localStorage.setItem('current-user', JSON.stringify(this.user));
  }
}
