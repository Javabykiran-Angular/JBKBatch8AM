import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  str:string='Hi welcome to Angular world';
  num1:number=65.678556;
   
  mydate=new Date();
  person={
    name:"sumit",
    id:2,
    role:'Developer'
  };
  constructor() { }

  ngOnInit() {
  }

}
