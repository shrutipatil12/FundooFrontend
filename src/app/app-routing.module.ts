import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component'
import { from } from 'rxjs';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteIconsComponent } from './components/note-icons/note-icons.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ArchivesComponent } from './components/archives/archives.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'reset/:token', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
  children:[
    // { path: 'dashboard', component: NotesComponent },
    { path: 'notes', component: NoteIconsComponent },
    { path: 'archives', component: ArchivesComponent }

    


  ] 
}
  // { path: 'getAllNote', component: NotesComponent },
  // { path: 'createNote', component: CreateNoteComponent },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
