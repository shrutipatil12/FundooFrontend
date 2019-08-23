import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isPopUp: boolean;

  constructor() { }

  ngOnInit() {
  }
  popUp(){
    this.isPopUp=!this.isPopUp;
    }
    Close(){
    this.isPopUp=!this.isPopUp;
    }
}
