import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
// import { Router } from '@angular/router'
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private UserService: UserService, private snackbar: MatSnackBar, private router: Router) { }
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

    this.UserService.login(this.user, '/login').subscribe(
      (response: any) => {
        console.log("res", response);
        var userId = response.data._id;
        var email = response.data.email;
        var password = response.data.password;
        var lastname = response.data.lastname;
        // tslint:disable-next-line: prefer-const
        var firstname = response.data.firstname;

        var isVerified = response.data.isVerified;

        var token = response.token;


        localStorage.setItem("userId", userId)
        localStorage.setItem("email", email)

        localStorage.setItem("password", password)

        localStorage.setItem("lastname", lastname)

        localStorage.setItem("firstname", firstname)

        localStorage.setItem("isVerified", isVerified)
        localStorage.setItem("token", token)


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
