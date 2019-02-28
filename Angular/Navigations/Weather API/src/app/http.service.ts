import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { 

  }

  getWeatherService(city){
    // return this._http.get('api.openweathermap.org/data/2.5/weather?q=`${city}`');
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=70cbd772aece7062623df04bc1fd80bc");
    // return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID70cbd772aece7062623df04bc1fd80bc');
  }
  
}
