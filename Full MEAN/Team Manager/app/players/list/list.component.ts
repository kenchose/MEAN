import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  players = []
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers(){
    this._httpService.serviceAllUsers()
    .subscribe(data => {
      this.players = data['players'];
    })
  }

  deletePLayer(id){
    this._httpService.serviceDeletePlayer(id)
    .subscribe(data => {
      this.allUsers();
    })
  }

}
