import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from '../../user';
import {environment} from '../../../environments/environment'
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  post(user:User,url){
    return this.http.post(environment.baseUrl+url,user);
  }
  // post(user:User,url){
  //   return this.http.post(environment.baseUrl+url,user);
  // }
}
