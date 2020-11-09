import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  post:any[]=[];
  ID;
  TITLE;
  BODY;
  ishidden:boolean=true;
  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
      this.post=(<any>response);
    },(error)=>{
      alert("Server not Available");
    });
  }

  onSubmit(mytitle,mybody){
    let obj={
      title:mytitle.value,
      body:mybody.value
    };

    this.service.postData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

    mytitle.value="";
    mybody.value="";

  }

  onUpdate(item){
    this.ID=item.id;
    this.TITLE=item.title;
    this.BODY=item.body;
    this.ishidden=false;
  }

  OnFinalUpdate(){
    let obj={
      id:this.ID,
      title:this.TITLE,
      body:this.BODY
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
        console.log(response);
    })

  }

  onDelete(id){

    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    });
  }

}
