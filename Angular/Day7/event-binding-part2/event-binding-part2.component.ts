import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-part2',
  templateUrl: './event-binding-part2.component.html',
  styleUrls: ['./event-binding-part2.component.css']
})
export class EventBindingPart2Component implements OnInit {

 name:string='';
 name1:string='';
 name2:string='';
 ishidden:boolean=true;
 product:string='';
  constructor() { }

  ngOnInit() {
  }

  onClick(myvalue,myvalue1){
    console.log(myvalue.value);
    console.log(myvalue1.value);
    myvalue.style.background='#0e71eb';
    this.name=myvalue.value;
    this.ishidden=false;
    this.name1=myvalue1.value;
  }

  onChange(mytemp){
    console.log("Event Ocuur!!");
    mytemp.style.color='red';
    this.name2=(<string>mytemp.value).toUpperCase();
  }

  onKeyUp(){
    console.log("Key Up Event Occur!!!");
  }
  onkeyDown(){
    console.log("Key Down Event Occur!!!");
  }
  

}
