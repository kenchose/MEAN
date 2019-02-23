import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cakes: any
  newCake: any
  singleCake: any
  rateCake: any
  constructor(private _httpService:HttpService){
    this.cakes = [];
    this.newCake = {baker:'', image:''};
    this.rateCake = {rating:1, comment:''}
  }
  
  ngOnInit(){
    this.componentGetCakes();
  }

  componentGetCakes(){
    let obs = this._httpService.serviceGetCakes();
    obs.subscribe(data => {
      console.log('Got all cakes', data)
      this.cakes = data['cake'];
    })
  }

  componentNewCake(){
    let obs = this._httpService.serviceNewCake(this.newCake);
    obs.subscribe(data => {
      console.log('Made a new cake', this.newCake)
      this.componentGetCakes();
      this.newCake = {baker:'', image:''};
    })
  }

  componentRateCake(id){
    // console.log(this.rateCake)
    let obs = this._httpService.serviceRateCake(id, this.rateCake);
    obs.subscribe(data => {
      console.log('Cake rated', this.rateCake);
      this.rateCake = {rating: '', comment:''};
    })
  }
  cakeToShow(data){
    // console.log(data);
    this.singleCake = data
  }  

}
