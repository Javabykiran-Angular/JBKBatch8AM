import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=12;
  // myobj={
  //   color:'indianred',
  //   fontStyle:'italic',
  //   padding:'5px'
  // };

  myobj={
    "color":'indianred',
    "font-style":'italic',
    "padding":'5px'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
