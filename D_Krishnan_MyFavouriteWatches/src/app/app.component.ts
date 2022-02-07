import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Krishnan_MyFavouriteWatches';
  watches : Content[];

  constructor(){
    this.watches = [{    
      id : 0,
      title : "Fossil",
      description : "A nice Rose Gold Stainless Steel watch with round dial",
      creator : "Fossil Smart Watch",
      imgURL :"",
      type : "Smart Watch"
      },{
        id : 1,
        title : "Rolex",
        description : "A square shaped dial with black leather strap watch nice to wear",
        creator : "Rolex Analog",
        imgURL : "https://upload.wikimedia.org/wikipedia/commons/7/70/Rolex_deepsea.jpg",
        type : "Analog Watch"
      },{
        id : 2,
        title : "Titan",
        description : "A Stainless Steel oval shaped dial with clock digital classy look",
        creator : "Titan Digital",
        imgURL : "",
        type : "Digital Watch"
      },{
        id : 3,
        title : "Citizen",
        description : "A Stainless Steel square shaped dial with clock digital best fit for all clothes",
        creator : "DigiCiti",
        imgURL : "",
        type : "Digital Watch"
      },{
        id : 4,
        title : "FastTrack",
        description : "A leather square shaped dial with clock smart classy look",
        creator : "Titan Digital",
        imgURL : "",
        type : "Smart Watch"
      },{
        id : 5,
        title : "Casio",
        description : "A Gold with round shaped dial with clock analog traditional look",
        creator : "WatchForTrends",
        imgURL : "https://upload.wikimedia.org/wikipedia/commons/8/80/Casio_Waveceptor_WV-200DE.jpg",
        type : "Analog Watch"
      }
    ];

  }


  
}



 
