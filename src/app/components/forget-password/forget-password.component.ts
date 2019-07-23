import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email=new FormControl('', [Validators.required, Validators.email]);
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor() { }

  ngOnInit() {
  }

}
