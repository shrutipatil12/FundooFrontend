import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/http/http.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private httpService: HttpService, private snackbar: MatSnackBar, private router: Router,private route:ActivatedRoute) { }
  hide=true;
  password = new FormControl('', [Validators.required]);

  user: User = new User();

  
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



  onClicked() {
    console.log("hugdfsffsfafyhfghf", this.user);

    this.user.password = this.password.value;
  
    console.log("hugyhfghf");
    console.log(this.user);
    let token:any=this.route.snapshot.paramMap.get('token');
    console.log("token in reset",token);
    
    let loginData: any = {
      "password": this.user.password,
      
    }
    console.log(loginData);
    this.httpService.post(loginData, '/reset/'+token).subscribe(
      res => {

        this.snackbar.open("reset password Suceessfully", "end now", { duration: 4000 });
        this.router.navigateByUrl('login');
      },
      err => {
        this.snackbar.open("Error while reseting pswd", "end now", { duration: 4000 });

      }
    );
  }
 
  ngOnInit(){

}
}
