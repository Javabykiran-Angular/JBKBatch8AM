import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  rating:number=12;
  rating1:number=13;
  rating3:number=1;
  constructor() { }

  ngOnInit() {
  }

}
