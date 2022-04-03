import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) { }

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

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != null)
      this.newWatchEvent.emit(result)
    });

  
  }
  }

  @Component({
    selector: 'dialog-overview-add-watch',
    templateUrl: 'dialog-overview-add-watch.html',
  })
  export class DialogOverviewExampleDialog {
    @Output() newWatchEvent: EventEmitter<Content> = new EventEmitter<Content>();
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     
    ) {}
    data?: Content;
    idValue : string = "";
    title : string = '';
    description: string = '';
    creator : string = '';
    imgUrl : string = '';
    type : string = '';
    tags : string = '';
    

    addNewWatch(): void {
      let tag: any;
      if(this.tags == ''){
        tag = '';
  
      }else{
          tag = this.tags.split(",");
      }
   
      this.data = {
        title: this.title,
        description : this.description,
        creator : this.creator,
        imgURL: this.imgUrl,
        type: this.type,
        tags: tag
      }; 
      console.log(this.data)
    
      this.dialogRef.close(this.data)
    }
  
    onNoClick(): void {
     this.dialogRef.close();
    }
  }


