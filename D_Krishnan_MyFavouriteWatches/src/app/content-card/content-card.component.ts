
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  myWatchList : ContentList;

  constructor() { 
    let fossil : Content;
    fossil = {
      id : 1,
      title : "Fossil",
      description : "",
      creator : "",
      imgURL : "",
      type : ""
    }

    let rolex : Content;
    rolex = {
      id : 1,
      title : "Fossil",
      description : "",
      creator : "",
      imgURL : "",
      type : ""
    }

    let titan : Content;
    titan = {
      id : 1,
      title : "Fossil",
      description : "",
      creator : "",
      imgURL : "",
      type : ""
    }
    this.myWatchList = new ContentList();
    this.myWatchList.addItems(fossil);
    this.myWatchList.addItems(rolex);
    this.myWatchList.addItems(titan);

    this.myWatchList.contentDescription;
    

  }

  ngOnInit(): void {
  }

}
