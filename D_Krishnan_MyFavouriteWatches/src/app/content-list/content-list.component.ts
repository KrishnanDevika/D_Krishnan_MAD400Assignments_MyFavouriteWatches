import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { WatchServiceService } from '../watch-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

 
  watches: Content[];
  
  constructor(private watchService : WatchServiceService) {
    this.watches = []
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

  ngOnInit(): void{
   
    this.watchService.getContentObs().subscribe(watchList =>{
      this.watches = watchList;
    });

  }

}
