import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=['Angular 8','React Js','Vue Js','Embber JS','JSP','Mean Stack'];

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


  constructor() { }

  ngOnInit() {
  }

}
