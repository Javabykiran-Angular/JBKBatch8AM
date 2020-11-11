import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
myid:number=0;
myusername:string='';
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap
    .subscribe((param)=>{
        this.myid=+param.get('id');
        this.myusername=param.get('username');
        
    })

  }

}
