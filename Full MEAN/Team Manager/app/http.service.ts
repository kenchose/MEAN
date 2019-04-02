import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  serviceAllUsers(){
    return this._http.get('/players/list');
  }

  serviceDeletePlayer(id){
    return this._http.delete('/player/'+id)
  }
}
