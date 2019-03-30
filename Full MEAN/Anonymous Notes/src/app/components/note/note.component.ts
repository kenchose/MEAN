import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: any 
  newNote: any
  today: String = moment().format('D MMM YYYY');
  myMoment: any
  constructor(private _httpService:HttpService, private _router:Router) { 
    this.newNote = {content: ''};
  }

  ngOnInit() {
    this.allNotes();
  }

  allNotes(){
    this._httpService.getAllNotes()
    .subscribe((data:any) => {
      this.notes = data['notes']
      let myMoment: moment.Moment = moment(data);
      console.log(myMoment)
    })
  }

  addNote(){
    this._httpService.createNote(this.newNote)
    .subscribe(data => {
      this.newNote = {content:''}
      this.allNotes();
      this._router.navigate(['/'])
    })
  }

}
