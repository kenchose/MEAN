import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
  game:Number
  constructor() { }

  ngOnInit() {
    this.game1();
  }

  game1(){
    this.game = 1
  }
  game2(){
    this.game = 2
  }
  game3(){
    this.game = 3
  }
}
