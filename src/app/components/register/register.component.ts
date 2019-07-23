import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  email=new FormControl('', [Validators.required, Validators.email]);
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  password=new FormControl('',[Validators.required, 
    Validators.minLength(5),  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') ])
    // hide = true;
    
    geterrorMessage() {
    return this.password.hasError('required') ? 'Enter correct password' :
    this.password.hasError('password') ? 'Not a valid password' :
    '';
    }


  constructor() { }

  ngOnInit() {
  }

}
