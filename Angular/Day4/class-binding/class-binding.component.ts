import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  
  rating:number=12;
  myclass1:string='danger';
  iserror:boolean=true;
  myobj={
    'success':!this.iserror,
    'danger':this.iserror,
    'special':true
  };
  constructor() { }

  ngOnInit() {
  }

}
