import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  myflag:boolean=false;
  name:string='';
  name2:string='';
  res:number=0;
  num1:number=10;
  num2:number=2;
  res2:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.myflag==false){
      console.log("Click Event Occur!!!!");
      this.myflag=true;
    }    
  }
  onClick1(){
     this.name='Sumit Raokhande'; 
  }

  onSetData(){
    this.name2="Java By Kiran....";
  }

  onEventData(myevent,myvalue){
    console.log(myevent);
    console.log(myvalue);
    console.log(myevent.target.value);
  }

}
