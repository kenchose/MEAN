import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  newPlayer:any;
  constructor(private _httpService:HttpService) {
    this.newPlayer = {name:'', position:'undecided'}
   }

  ngOnInit() {
  }
  

}
