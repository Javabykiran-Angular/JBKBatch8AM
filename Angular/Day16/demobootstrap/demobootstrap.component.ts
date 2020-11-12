import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrobj=[
    {
      name:'Samsung',
      description:'Good Phone',
      price:20000,
      quantity:1
    },
    {
      name:'Motorola',
      description:'Awsome Phone',
      price:15000,
      quantity:2
    },
    {
      name:'LG',
      description:'Life Good',
      price:21000,
      quantity:1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
