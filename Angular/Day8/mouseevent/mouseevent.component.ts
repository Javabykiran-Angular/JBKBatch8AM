import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  templateUrl: './mouseevent.component.html',
  styleUrls: ['./mouseevent.component.css']
})
export class MouseeventComponent implements OnInit {

  Arrobj=[
    {
      name:"Samsung",
      quantity:5,
      description:"Good Product",
      price:10000
    },
    {
      name:"Motorola",
      quantity:2,
      description:"Excellent Product",
      price:15000
    },
    {
      name:"LG",
      quantity:1,
      description:"Good Product",
      price:20000
    },
    {
      name:"Nokia",
      quantity:10,
      description:"Avg Product",
      price:10000
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(myitem){
    // console.log("Mouse Over Event Occur!!!!");
    this.selected=myitem.name;
  }
  onMouseOut(){
    this.selected='';
  }

}
