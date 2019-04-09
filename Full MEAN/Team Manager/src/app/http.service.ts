import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  serviceAllPlayers(){
    return this._http.get('/players/list');
  }
  
  serviceAddNewPlayer(player){
    return this._http.post('/create', player)
  }

  serviceDeletePlayer(player){
    return this._http.delete('/player/'+player._id)
  }
}
