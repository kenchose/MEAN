import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: any 
  newNote: any
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
