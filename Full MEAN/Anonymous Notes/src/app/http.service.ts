import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getAllNotes(){
    return this._http.get('/notes');
  }

  createNote(note){
    return this._http.post('/note', note);
  }
}
