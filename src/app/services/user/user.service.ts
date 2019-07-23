import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../../user';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUser(user:User,){
    return this.http.post(environment.baseUrl+'/register',user);
  }
}
