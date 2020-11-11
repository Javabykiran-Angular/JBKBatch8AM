import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=0;
  myusername:string='';
  myobj={
    id:2,
    fname:'Sumit',
    lname:'Raokhande'
  };
  constructor(private routes:Router) { }

  ngOnInit() {
    this.myid=8;
    this.myusername="Sumit Raokhande";
  }

  onPage1(){
    this.myid=9;
    this.routes.navigate(['/Page1',this.myid])
  }

  onPage2(){
    this.myid=10;
    this.myusername="JavaByKiran";
    this.routes.navigate(['/Page2',this.myid,this.myusername])
  }

  onPage3(){
    this.routes.navigate(['/Page3']);
  }

  onFollower(){
    this.routes.navigate(['/Follower']);

  }

  onQueryParam(){

    this.myobj.id=3;
    this.myobj.fname='Java';
    this.myobj.lname='ByKiran';
    this.routes.navigate(['/QueryParam'],{
      queryParams:this.myobj
    })

  }
}
