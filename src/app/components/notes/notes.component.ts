import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private userService: UserService, private snackbar: MatSnackBar) { }
title:any;
description:any;

 note:any[] = []
//   {
//     title:"title",
//     description:"description"
//   },
//   {
//     title:"title",
//     description:"description"
//   },
//   {
//     title:"title",
//     description:"description"
//   },
//   {
//     title:"title",
//     description:"description"
//   }
// ]


  getAllNotes(){
    this.userService.getAllNotes('/getAllNote').subscribe(
      (res: any) => {
        this.note = res.data;
        console.log("notes: ", this.note);
        
        this.snackbar.open("get Successfully", "end now", { duration: 6000 });
      },
      (err: any) => {
        
        this.snackbar.open("get UnSuccessfully", "end now", { duration: 6000 });

      }
    );
   }
  ngOnInit() {
    this.getAllNotes();
  }

}
