import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childtoparent=new EventEmitter();

   @Output() childtoparentarrobj=new EventEmitter();

   childMsg:string='Data send from Child to Parent.....';

   childArrobj=[
     {
       productname:'xyz',
       quantity:2,
       description:'Very Good'
     },{
      productname:'pqr',
      quantity:1,
      description:'Good'
    },
    {
      productname:'ABC',
      quantity:10,
      description:'Excellent'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.childtoparent.emit(this.childMsg);

    this.childtoparentarrobj.emit(this.childArrobj);

  }

}
