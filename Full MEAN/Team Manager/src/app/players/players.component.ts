import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent implements OnInit {
  players = []
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }

  // allUser(){
  //   this._httpService.serviceAllUsers()
  //   .subscribe(data => {
  //     this.players = data['players'];
  //   })
  // }

}
