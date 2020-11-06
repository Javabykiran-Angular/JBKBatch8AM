import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
