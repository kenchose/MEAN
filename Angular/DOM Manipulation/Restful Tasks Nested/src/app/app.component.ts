import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  task: any;
  // task=[];
  myTask:any;
  newTask: any;
  edit: any;
  editTask: any;
  constructor(private _httpService: HttpService){
    this.task = []
    this.edit=false;
    this.newTask = {title:'', description:''};
    
  }
  ngOnInit(){
  }
  componentGetTasksFromService(){
    let obs = this._httpService.serviceGetTasks();
    obs.subscribe(data => {
      console.log('Got our multiple tasks!', data)
      this.task = data['task'];
    })
  }

  taskToShow(data){
    console.log(data)
    this.myTask = data
  }

  // componentToPost(){ //form name from html
  //   let obs = this._httpService.servicePost(this.newTask);
  //   obs.subscribe(data => {
  //     this.componentGetTasksFromService(); //once we get the data back, rerun to task method so it updates our list and we can see all posts made
  //     this.newTask = {title:'', description:''} //to clear form after creating a new task
  //   })
  // }

  componentGetSingleTask(id){ 
    // console.log(id);
    let obs = this._httpService.serviceGetSingleTask(id);
    obs.subscribe(data => {
      // this.edit = true;
      this.editTask = data
    })
  }

  // taskToShow(task){
  //   console.log(task)
  //   let obs = this._httpService.serviceGetSingleTask(id);
  //   obs.subscribe(data => {
  //     this.task = data['task'];
  //   })
  // }
}
