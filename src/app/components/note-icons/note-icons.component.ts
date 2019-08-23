import { Component, OnInit, Input } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBar } from '@angular/material';
import { Note } from '../../note';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  archives: Boolean;
  @Input() items: Note;

  constructor(private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  // onArchive(items, $event) {
  //   this.archives = $event
  //   var data = {
  //     "_id": items._id,
  //     "archives": true
  //   }
  //   console.log("arc data", data);

  //   this.userService.archiveNotes(data, '/getAllArchivesNote').subscribe(
  //     (res: any) => {

  //       this.snackbar.open(" get all archive Suceessfully", "end now", { duration: 6000 });
  //     },
  //     (err: any) => {

  //       this.snackbar.open("get all archive UnSuceessfully", "end now", { duration: 6000 });

  //     }
  //   );
  //   this.userService.archiveNotes(data, '/archivesNote').subscribe(
  //     (res: any) => {

  //       this.snackbar.open("archive Suceessfully", "end now", { duration: 6000 });
  //     },
  //     (err: any) => {

  //       this.snackbar.open("archive UnSuceessfully", "end now", { duration: 6000 });

  //     }
  //   );

  // }

}
