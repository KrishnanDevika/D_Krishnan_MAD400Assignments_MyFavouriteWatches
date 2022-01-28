
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
      description : "A nice Rose Gold Stainless Steel watch with round dial",
      creator : "Fossil Smart Watch",
      imgURL : "",
      type : "Smart Watch"
    }

    let rolex : Content;
    rolex = {
      id : 2,
      title : "Rolex",
      description : "A square shaped dial with black leathe strap watch nice to wear",
      creator : "Rolex Analog",
      imgURL : "",
      type : "Analog Watch"
    }

    let titan : Content;
    titan = {
      id : 3,
      title : "Titan",
      description : "A Stainless Steel oval shaped dial with clock digital classy look",
      creator : "Titan Digital",
      imgURL : "",
      type : "Digital Watch"
    }
    this.myWatchList = new ContentList();
    this.myWatchList.addItems(fossil);
    this.myWatchList.addItems(rolex);
    this.myWatchList.addItems(titan);


  }

  ngOnInit(): void {
  }

}
