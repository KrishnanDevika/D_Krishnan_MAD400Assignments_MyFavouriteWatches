
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {



  constructor() { 
    let fossil : Content;
    fossil = {
      id : 1,
      title : "Fossil",
      description : "A nice Rose Gold Stainless Steel watch with round dial",
      creator : "Fossil Smart Watch",
      imgURL : "https://www.fossil.com/en-in/products/carlie-three-hand-rose-gold-tone-stainless-steel-watch/ES4301.html",
      type : "Smart Watch"
    }

    let rolex : Content;
    rolex = {
      id : 2,
      title : "Rolex",
      description : "A square shaped dial with black leather strap watch nice to wear",
      creator : "Rolex Analog",
      imgURL : "https://www.1stdibs.com/jewelry/watches/wrist-watches/rare-unusual-rolex-vintage-precision-stainless-steel-3327042/",
      type : "Analog Watch"
    }

    let titan : Content;
    titan = {
      id : 3,
      title : "Titan",
      description : "A Stainless Steel oval shaped dial with clock digital classy look",
      creator : "Titan Digital",
      imgURL : "https://www.myntra.com/watches/titan/titan-raga-women-white-dial-watch-ne2370ym03/240199/buy",
      type : "Digital Watch"
    }

  }

  ngOnInit(): void {
  }

}
