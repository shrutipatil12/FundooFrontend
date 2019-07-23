import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../user';
import { HttpService } from '../../services/http/http.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: User=new User();
  firstname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  // user: any;

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  password = new FormControl('', [Validators.required,
  Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
  // hide = true;

  geterrorMessage() {
    return this.password.hasError('required') ? 'Enter correct password' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }


  constructor(private httpService: HttpService) { }

  showSucessMessage: boolean;
  serverErrorMessages: string;

  onClicked() {
    this.user.firstname = this.firstname.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    console.log("hugyhfghf");
    console.log(this.user)
    this.httpService.postUser(this.user, '/register').subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
      },
      err => {
        console.log(err)
        if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
        }
        else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
  ngOnInit() {
  }

}
