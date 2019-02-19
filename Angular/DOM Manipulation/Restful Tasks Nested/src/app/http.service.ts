//Connection to pass data into our server
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    
  }
  
  serviceGetTasks(){
    return this._http.get('/tasks')
  }

  servicePost(task){
    return this._http.post('/task', task);  //task is basically the req.body on ther server side 
  }

  serviceGetSingleTask(id){
    // console.log(id)
    return this._http.get('/tasks/'+id)
  }

  serviceEditTask(task){
    return this._http.put('/tasks/'+task._id, task)
  }
  serviceDeleteTask(id){ 
    return this._http.delete('/tasks/' + id)
  }
}
