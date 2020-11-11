import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  myid:number=0;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap
    .subscribe((param)=>{
      console.log(param.get('id'));
      this.myid=+param.get('id');
    });
  }

}
