import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  constructor(private _httpService:HttpService) { }

  humidity: any;
  avgTemp: any;
  highTemp: any;
  lowTemp: any;
  status: any;
  name: any;

  ngOnInit() {
    this.componentGetWeather('San Jose');
  }

  componentGetWeather(city){
    let obs = this._httpService.getWeatherService(city);
    obs.subscribe(data => {
      console.log('Burbank weather forecaset', data);
      this.humidity = data['main']['humidity'];
      this.avgTemp = Math.floor(data['main']['temp']);
      this.highTemp = Math.floor(data['main']['temp_max']);
      this.lowTemp = Math.floor(data['main']['temp_min']);
      this.status = data['weather'][0]['description'];
      this.name = data['name'];
    })
  }

}
