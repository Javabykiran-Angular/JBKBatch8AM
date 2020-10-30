import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=['Angular 8','React Js','Vue Js','Embber JS','JSP','Mean Stack'];
  constructor() { }

  ngOnInit() {
  }

}
