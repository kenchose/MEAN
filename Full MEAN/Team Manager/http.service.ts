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

  gamePlaying1(player, playing){
    return this._http.put('/player/'+playing+'/'+player._id+'/game1', player, playing);
  }
  gamePlaying2(player, playing){
    return this._http.put('/player/'+playing+'/'+player._id+'/game2', player, playing);
  }
  gamePlaying3(player, playing){
    return this._http.put('/player/'+playing+'/'+player._id+'/game3', player, playing);
  }
}
