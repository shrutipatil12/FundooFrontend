import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../user';
import { HttpService } from '../../services/http/http.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: User = new User();
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);
  // snackbar: any;


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

  confirmPassword = new FormControl('', [Validators.required]);
  getErrorMessageConfirmPassword() {
    return this.password.hasError('required') ? 'You must enter a 8 character value' :
      // this.password.hasError('required') ?' Password should contain uppercase lowercase letter number and special characters':
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }


  constructor(private httpService: HttpService, private snackbar: MatSnackBar) { }


  onClicked() {
    this.user.firstname = this.firstname.value;
    this.user.lastname = this.lastname.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    console.log("hugyhfghf");
    console.log(this.user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    let registerData:any={
      "email": this.user.email ,
       "password":this.user.password,
       "firstname":this.user.firstname ,
       "lastname":this.user.lastname 
     }
    this.httpService.post(registerData, '/register').subscribe(
      (res:any) => {
        // this.showSucessMessage = true;
        // setTimeout(() => this.showSucessMessage = false, 4000);
        this.snackbar.open("Registration Suceessfully", "end now", { duration: 6000 });
      },
      (err:any) => {
        console.log(err)
        // if (err.status === 422) {
        //   this.serverErrorMessages = err.error.join('<br/>');
        // }
        // else
          // this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          this.snackbar.open("Registration UnSuceessfully", "end now", { duration: 6000 });

      }
    );
  }
  ngOnInit() {
  }

}
