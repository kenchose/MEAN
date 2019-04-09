import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../http.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.sass']
})
export class Game1Component implements OnInit {

  players = []
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allPlayers();

  }

  allPlayers(){
    this._httpService.serviceAllPlayers()
    .subscribe(data => {
      this.players = data['players'];
    })
  }

}
