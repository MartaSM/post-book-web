import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private static readonly apiURI:string = 'http://localhost:3000/users';
  protected static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  list():Observable<User[]> {

    return this.http.get<User[]>(UsersService.apiURI, UsersService.defaultOptions);
  }

}
