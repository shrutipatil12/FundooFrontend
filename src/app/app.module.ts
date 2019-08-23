import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import{HttpClientModule} from '@angular/common/http'
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule, MatGridListModule, MatMenuModule, MatGridList, MatToolbarModule, MatCheckboxModule, MatListModule, MatButtonToggleModule } from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material';
import { NotesComponent } from './components/notes/notes.component';
import { NoteIconsComponent } from './components/note-icons/note-icons.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { ArchivesComponent } from './components/archives/archives.component';

@NgModule({
  declarations: [
  AppComponent,

  RegisterComponent,

  LoginComponent,

  ForgetPasswordComponent,

  ResetPasswordComponent,

  DashboardComponent,

  NotesComponent,

  CreateNoteComponent,
  NoteIconsComponent,
  GetAllNoteComponent,
  ArchivesComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  MatFormFieldModule,
  FlexLayoutModule,
  MatIconModule,
  MatCardModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatToolbarModule,
  HttpClientModule,
  MatSnackBarModule,
  
MatButtonModule,
MatCheckboxModule,
MatListModule,
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }