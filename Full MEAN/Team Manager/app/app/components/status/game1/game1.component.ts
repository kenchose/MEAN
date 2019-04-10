import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.sass']
})
export class Game1Component implements OnInit {
  switch: Boolean = true;
  players = []
  playing: String
  game: Number
  // player: Object
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allPlayers();
  }

  allPlayers(){
    this._httpService.serviceAllPlayers()
    .subscribe(data => {
      this.players = data['players'];
      console.log(this.players)
    })
  }

  savePlayer(player, playing){
    this._httpService.gamePlaying(player, playing)
    .subscribe((data:any) => {
      console.log('from data component', data)
      this.allPlayers();
    })
  }

  playerPlaying(player){
    this.playing = "Playing"
    this.game = 1
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }

  playerNotPlaying(player){
    this.playing = "Not Playing"
    this.game = 1
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }

  playerUndecided(player){
    this.playing = "Undecided"
    this.game = 1
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }
}
