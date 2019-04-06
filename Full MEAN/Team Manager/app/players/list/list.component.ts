import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  players = []
  constructor(private _httpService:HttpService, private _router:Router) { }

  ngOnInit() {
    this.allPlayers();
  }

  allPlayers(){
    this._httpService.serviceAllPlayers()
    .subscribe(data => {
      this.players = data['players'];
    })
  }

  deletePlayer(id){
    this._httpService.serviceDeletePlayer(id)
    .subscribe(data => {
      this.allPlayers();
      this._router.navigate(['/players/list'])
    })
  }

}
