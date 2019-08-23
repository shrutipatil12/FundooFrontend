import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../user';
import {environment} from '../../../environments/environment'
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  localDataToken=localStorage.getItem("token")
  

  
  header={
token:this.localDataToken
  }

  postUser(postUserData){
    return this.http.post(environment.baseUrl + postUserData.url,postUserData.data);
  }


  post(postData){
    console.log("localDataToken",this.localDataToken);
    console.log("baseUrl",environment.baseUrl+postData.url);
    console.log("header",this.header)
    return this.http.post(environment.baseUrl + postData.url,postData.data,{headers:this.header});
  }

  get(url){
    console.log("baseUrl",environment.baseUrl+url.url);
    console.log("header",this.header);
    
    return this.http.get(environment.baseUrl + url.url,{headers:this.header});
  }
  // post(user:User,url){
  //   return this.http.post(environment.baseUrl+url,user);
  // }
}
