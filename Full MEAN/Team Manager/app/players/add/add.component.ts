import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Player } from './../../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  // newPlayer:any;
  player = new Player();
  // newPlayer: any
  players = []
  // addPlayer(){
  //   this.players.push(this.player);
  //   this.player = new Player();
  // }
  constructor(private _httpService:HttpService, private _router:Router) {
    // this.player = {id:Number(), name:'', position:'', created_at:Date(), updated_at:''}
   }

  ngOnInit() {
  }
  
  addNewPlayer(){
    this._httpService.serviceAddNewPlayer(this.player)
    .subscribe((newPlayer:any) => {
      console.log("this is posting through html", newPlayer)
      if (newPlayer.error) {
          this._router.navigate(['/players/add']);
      } else {
        this._router.navigate(['/players/list']);
      }
    })
  }
}