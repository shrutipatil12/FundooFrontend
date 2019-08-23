import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/note';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  archives: Boolean;
  @Input() items: Note;

  constructor(private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onArchive(items, $event) {
    this.archives = $event
    var data = {
      "_id": items._id,
      "archives": true
    }
    console.log("arc data", data);

    this.userService.archiveNotes(data, '/getAllArchivesNote').subscribe(
      (res: any) => {

        this.snackbar.open(" get all note Suceessfully", "end now", { duration: 6000 });
      },
      (err: any) => {

        this.snackbar.open("get all note UnSuceessfully", "end now", { duration: 6000 });

      }
    );
    this.userService.archiveNotes(data, '/archivesNote').subscribe(
      (res: any) => {

        this.snackbar.open("archive Suceessfully", "end now", { duration: 6000 });
      },
      (err: any) => {

        this.snackbar.open("archive UnSuceessfully", "end now", { duration: 6000 });

      }
    );

  }
}
