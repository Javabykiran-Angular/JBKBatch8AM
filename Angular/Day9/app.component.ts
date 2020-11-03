import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  msg:string="Parent Data Send to child...";

  arrobj=[
    {
      name:"Sumit Raokhande",
      id:2,
      desigation:'Developer'
    },
    {
      name:"Kiran Raokhande",
      id:3,
      desigation:'Dev Ops'
    },
    {
      name:"Spruha Raokhande",
      id:1,
      desigation:'Administartor'
    }
  ];

  receivedata:string='';
  datafromchild=[];

}
