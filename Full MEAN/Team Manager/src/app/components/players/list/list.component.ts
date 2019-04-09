import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  delete: any
  players = []
  constructor(private _httpService:HttpService, private _router:Router) {
   }

  ngOnInit() {
    this.allPlayers();
  }

  allPlayers(){
    this._httpService.serviceAllPlayers()
    .subscribe(data => {
      this.players = data['players'];
    })
  }

  deletePlayer(player){
    let obs = this._httpService.serviceDeletePlayer(player);
    this.delete = (confirm("Are you sure you want to delete " + player.name));
    if(this.delete){
      obs.subscribe((data:object) => {
        this.allPlayers();
        this._router.navigate(['/players/list']);
    })} else {
        this._router.navigate(['/players/add'])
    }
  }

  // private newMethod(): string {
  //   return "Are you sure you want to delete ${player.position}";
  // }
}
