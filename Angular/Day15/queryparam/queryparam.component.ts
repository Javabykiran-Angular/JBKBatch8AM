import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParamMap
    .subscribe((queryparam)=>{
        console.log("ID:: "+queryparam.get('id'));
        console.log("Fname:: "+queryparam.get('fname'));
        console.log("Lname:: "+queryparam.get('lname'));
    })
  }

}
