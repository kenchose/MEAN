import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../http.service'

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.sass']
})
export class Game3Component implements OnInit {

  playing:String
  players = [];
  game:Number
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
    this._httpService.gamePlaying3(player, playing)
    .subscribe((data:any) => {
      console.log('from data component', data)
      this.allPlayers();
    })
  }

  playerPlaying(player){
    this.playing = "Playing"
    this.game = 2
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }

  playerNotPlaying(player){
    this.playing = "Not Playing"
    this.game = 2
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }

  playerUndecided(player){
    this.playing = "Undecided"
    this.game = 2
    this.savePlayer(player, this.playing);
    this.allPlayers();
  }
}

