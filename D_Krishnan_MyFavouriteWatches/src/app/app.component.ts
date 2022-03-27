import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { WatchServiceService } from './services/watch-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Krishnan_MyFavouriteWatches';

  newWatchList: Content[];
  
  constructor(private watchService : WatchServiceService) {
    this.newWatchList = [];
   }
  ngOnInit(): void{

  }

  getIndividualWatch(index : string){
    let id = parseInt(index);
    this.watchService.getIndividualContent(id).subscribe(newWatch =>{
      this.newWatchList.push(newWatch);
    });
  }

  
}



 
