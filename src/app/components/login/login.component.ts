import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
// import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private httpService: HttpService, private snackbar: MatSnackBar, private router: Router) { }
  // hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  // password=new FormControl('', [Validators.required, Validators.password]);

  user: User = new User();

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }


  onClicked() {
    console.log("data", this.user);

    this.user.email = this.email.value;
    this.user.password = this.password.value;

    console.log(this.user);
    let loginData: any = {
      "email": this.user.email,
      "password": this.user.password
    }
    console.log(loginData);
    this.httpService.post(loginData,'/login').subscribe(
      res => {

        this.snackbar.open("login Successfull", "end now", { duration: 4000 });
        this.router.navigateByUrl('dashboard');
      },
      err => {
        this.snackbar.open("login UnSuccessfull Enter correct data", "end now", { duration: 4000 });

      }
    );
  }
  ngOnInit() {
  }

}
