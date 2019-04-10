import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../http.service'

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.sass']
})
export class Game3Component implements OnInit {

  players = [];
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

}
