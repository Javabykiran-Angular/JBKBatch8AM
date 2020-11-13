import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent implements OnInit {

  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log("Form Value is .. "+f.value);
    console.log("Username Value is .. "+f.value.username);
    
  }

}
