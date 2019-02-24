import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { 

  }

  serviceGetCakes(){
    return this._http.get('/cakes')
  }

  serviceNewCake(cake){
    return this._http.post('/cake', cake)
  }

  serviceGetOne(id){
    return this._http.get('/cakes/'+id)
  }

  serviceRateCake(id, rating){ 
    return this._http.post('/cake/rate/'+id, rating)
  }
}






