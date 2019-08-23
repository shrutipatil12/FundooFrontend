import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/user';
import { HttpService } from 'src/app/services/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private userService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  email=new FormControl('', [Validators.required, Validators.email]);
  user: User = new User();

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a Email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
 
  onClicked() {
    console.log("data", this.user);

    this.user.email = this.email.value;
  
    console.log("hugyhfghf");
    console.log(this.user);
   
    this.userService.forgetPassword(this.user, '/forget').subscribe(
      (res:any) => {

        this.snackbar.open("forget password Suceessfully,Email sent", "end now", { duration: 4000 });
      },
      (err:any) => {
        this.snackbar.open("Error while sending mail", "end now", { duration: 4000 });

      }
    );
  }
  ngOnInit() {
  }

}
