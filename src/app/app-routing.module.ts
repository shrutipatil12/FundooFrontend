import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component'
import { from } from 'rxjs';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'forgetPassword' ,component:ForgetPasswordComponent},
  {path : 'resetPassword', component:ResetPasswordComponent},
  {path : 'dashboard',component:DashboardComponent},

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
