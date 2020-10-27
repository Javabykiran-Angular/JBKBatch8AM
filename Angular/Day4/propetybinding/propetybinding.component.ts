import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propetybinding',
  templateUrl: './propetybinding.component.html',
  styleUrls: ['./propetybinding.component.css']
})
export class PropetybindingComponent implements OnInit {

  name:string='Sumit raokhande';
  ishidden:boolean=false;
  imgUrl:string='../../assets/Desert.jpg';

  constructor() { }

  ngOnInit() {
  }

}
