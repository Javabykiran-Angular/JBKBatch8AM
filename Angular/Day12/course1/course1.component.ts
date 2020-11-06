import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {

  mycourse=[];
  constructor(private service:MyService) {
   // let service=new MyService();
  // this.mycourse= service.getCourse();
   }
   

  ngOnInit() {
      this.mycourse=this.service.getCourse();  
  }

}
