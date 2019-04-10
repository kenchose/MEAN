import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../http.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.sass']
})
export class Game2Component implements OnInit {

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
    this._httpService.gamePlaying(player, playing)
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