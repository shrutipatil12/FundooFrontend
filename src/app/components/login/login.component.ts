import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email=new FormControl('', [Validators.required, Validators.email]);
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  password=new FormControl('', [Validators.required]);
  hide=true;
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }

 
    
  constructor() { }

  ngOnInit() {
  }

}
