import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user:User = new User();

  private static readonly apiURI:string = 'http://localhost:3000/sessions';
  protected static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  }

  constructor(private http: HttpClient) { }
  
  authenticate(user: User):Observable<User> {
    return this.http.post<User>(SessionService.apiURI, user, SessionService.defaultOptions)
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
