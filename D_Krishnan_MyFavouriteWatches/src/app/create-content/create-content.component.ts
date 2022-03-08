import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  //passing data from child to parent using output event emitter
  @Output() newWatchContent: EventEmitter<Content> = new EventEmitter<Content>();

  newWatch?: Content

  //ngModel to control input variables
  idValue : string = '';
  title : string = '';
  description: string = '';
  creator : string = '';
  imgUrl : string = '';
  type : string = '';
  tags : string = '';

  //error message 
  failMessage : string = '';


  constructor() { }

  ngOnInit(): void {
  }

  //handling button click
  addContent(){
    let tag: any;
    if(this.tags == ''){
      tag = '';

    }else{
        tag = this.tags.split(",");
    }
  
    //add new watch from inputs given  
    this.newWatch = {
      id: parseInt(this.idValue),
      title: this.title,
      description : this.description,
      creator : this.creator,
      imgURL: this.imgUrl,
      type: this.type,
      tags: tag
    };

    //Promise Pattern to send the data to parent
   var  promise = new Promise((resolve, reject)=>{
     if(this.idValue != '' && this.title != '' && this.description != '' && this.creator != ''){
        resolve(this.newWatchContent.emit(this.newWatch))
     }

     else{
       reject("error");
     }
 
   });

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
    this.failMessage = '';
   });

   promise.catch((error)=>{
    this.failMessage = "Content did not added. Please fill the required fields";
    console.log("Addition Failed ",this.title );

   });
 
  }
} 
