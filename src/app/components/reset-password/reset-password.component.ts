import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide=true;
  password = new FormControl('', [Validators.required]);
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
      // this.password.hasError('required') ?' Password should contain uppercase lowercase letter number and special characters':
        this.password.hasError('password') ? 'Not a valid password' :
          '';
  }

  confirmPassword = new FormControl('', [Validators.required]);
  getErrorMessageConfirmPassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
     // this.password.hasError('required') ?' Password should contain uppercase lowercase letter number and special characters':
        this.password.hasError('password') ? 'Not a valid password' :
          '';
  }



  constructor() { }

  ngOnInit() {
  }

}
