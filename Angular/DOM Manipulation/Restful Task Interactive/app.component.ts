import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title ='MEAN'
  task=[];
  showing: any;
  showTask: any;
  constructor(private _httpService: HttpService){
    this.showing=false;
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getTasksFromService(); take out this method to be able to show on click in the html
  }
  componentGetTasksFromService(){
    let obs = this._httpService.serviceGetTasks();
    obs.subscribe(data => {
      console.log('Got our multiple tasks!', data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.task = data['task'];
    })
  }
  componentGetSingleTask(id){
    let obs = this._httpService.serviceGetSingleTask(id);
    obs.subscribe(data => {
      this.showing=true;
      this.showTask=data
    })
  }
//   onButtonClickEvent(num: Number): void { 
//     console.log(`Click event is working with num param: ${num}`);
//     // call the service's method to post the data, but make sure the data is bundled up in an object!
//     let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
//   }
//   onButtonClickParam(num: Number): void { 
//     console.log(`Click event is working with num param: ${num}`);
//     // call the service's method to post the data, but make sure the data is bundled up in an object!
//     let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
//   }
// onButtonClick(): void { 
//   console.log(`Click event is working`);
// }
// onButtonClickParam(num: Number): void { 
//   console.log(`Click event is working with num param: ${num}`);
// }
// onButtonClickParams(num: Number, str: String): void { 
//   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// }
// onButtonClickEvent(event: any): void { 
//   console.log(`Click event is working with event: ${event}`);
// }

}
