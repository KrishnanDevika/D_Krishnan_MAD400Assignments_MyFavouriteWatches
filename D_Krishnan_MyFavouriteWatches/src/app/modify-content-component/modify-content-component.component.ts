import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newWatchEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateWatchEvent: EventEmitter<Content> = new EventEmitter<Content>();
 

  newWatch?: Content
    //ngModel to control input variables
    idValue : string = "";
    title : string = '';
    description: string = '';
    creator : string = '';
    imgUrl : string = '';
    type : string = '';
    tags : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addWatch(): void {
    let tag: any;
    if(this.tags == ''){
      tag = '';

    }else{
        tag = this.tags.split(",");
    }
 
    if(this.idValue === ""){
    this.newWatch = {
      title: this.title,
      description : this.description,
      creator : this.creator,
      imgURL: this.imgUrl,
      type: this.type,
      tags: tag
    }; 
    var  promise = new Promise((resolve, reject)=>{
      resolve(this.newWatchEvent.emit(this.newWatch))
    });
  }

  else{
  
    this.newWatch = {
      id: parseInt(this.idValue),
      title: this.title,
      description : this.description,
      creator : this.creator,
      imgURL: this.imgUrl,
      type: this.type,
      tags: tag
    }; 

    var  promise = new Promise((resolve, reject)=>{
      resolve(this.updateWatchEvent.emit(this.newWatch))
    });
  }
        //Promise Pattern to send the data to parent


  promise.then((res)=>{
   console.log("Addition Successful ",this.title );
   //clear all input fields
   this.idValue = '';
   this.title = '';
   this.description = '';
   this.type = '';
   this.creator = '';
   this.imgUrl = '';
   this.type = '';
   this.tags = '';
 
  });

  }

}
