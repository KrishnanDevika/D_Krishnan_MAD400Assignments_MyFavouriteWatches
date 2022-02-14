import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

 
  watches: Content[];
  
  constructor() { 
    this.watches = [{    
      id : 0,
      title : "Fossil",
      description : "A nice Rose Gold Stainless Steel watch with round dial",
      creator : "Fossil Smart Watch",
      type : "Smart Watch"
      },{
        id : 1,
        title : "Rolex",
        description : "A Stainless Steel round shaped dial with clock traditional look",
        creator : "Rolex Analog",
        imgURL : "https://upload.wikimedia.org/wikipedia/commons/7/70/Rolex_deepsea.jpg",
        type : "Analog Watch",
        tags: ["Silver" ,"Round"]
      },{
        id : 2,
        title : "Titan",
        description : "A round shaped dial with Steel strap watch nice to wear",
        imgURL :"https://upload.wikimedia.org/wikipedia/commons/7/7c/Timex_T5E901_Ironman_Triathlon_30_Lap_FLIX.jpg",
        creator : "Titan Digital",
        type: "Digital Watch",
        tags:["Round", "Black"]
      },{
        id : 3,
        title : "Citizen",
        description : "A Stainless Steel square shaped dial with clock digital best fit for all clothes",
        creator : "DigiCiti",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Citizen_Attesa_Eco-Drive_ATV53-3023_02.JPG",
        type : "Analog Watch"
      },{
        id : 4,
        title : "FastTrack",
        description : "A leather square shaped dial with clock smart classy look",
        creator : "FastTrack Digital",
        
      },{
        id : 5,
        title : "Casio",
        description : "A Gold with round shaped dial with clock analog traditional look",
        creator : "WatchForTrends",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG",
      
      },{
        id : 6,
        title : "Fossil",
        description : "A Black Stainless Steel watch with round shaped dial fit perfectly with classy quality",
        creator : "FossileGropus",
        type: "Analog Watch"
     
      }
    ];
  }
  FetchContent(searchString : String): String{

    var result = 'no';
    if(searchString.length == 0){
      result = 'null';
    }
    for(var watch of this.watches ){
   
      if(watch.title.toUpperCase() === searchString.toUpperCase()){
        result = "yes";
      }
    }
    return result;
  }

  ngOnInit(){

  }

}
