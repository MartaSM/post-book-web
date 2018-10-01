import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})


export class UsersService extends BaseApiService {

  private static readonly apiURI:string = 'http://localhost:3000/users';
 

  constructor(private http: HttpClient) {
    super(); 
   }

  list():Observable<User[]> {

    return this.http.get<User[]>(UsersService.apiURI, BaseApiService.defaultOptions);
  }

}
