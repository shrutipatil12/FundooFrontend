import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user';
import { environment } from '../../../environments/environment'
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private httpService: HttpService) { }

  // post(user: User, ) {
  //   return this.http.postUser(environment.baseUrl + '/register', user);
  // }
  archiveNotes(data,url){
    var archiveData={
      data:data,
      url:url
    }
    return this.httpService.post(archiveData);

  }

  getAllNotes(url ) {
   var getNoteData={
      url:url
      
    }
    // console.log("url get note us",url);
    
    return this.httpService.get(getNoteData);
  }
  createNote(data, url) {
    var createData = {
      url: url,
      data: data
    }
    return this.httpService.post(createData);

  }

  register(data, url) {
    var registerData = {
      url: url,
      data: data
    }
    return this.httpService.postUser(registerData);
  }

  login(data, url) {
    var loginData = {
      url: url,
      data: data
    }
    return this.httpService.postUser(loginData);
  }

  forgetPassword(data, url) {
    var forgetData = {
      url: url,
      data: data
    }
    return this.httpService.postUser(forgetData);
  }

  resetPassword(data, url) {
    var resetData = {
      url: url,
      data: data
    }
    return this.httpService.postUser(resetData);
  }1


}
