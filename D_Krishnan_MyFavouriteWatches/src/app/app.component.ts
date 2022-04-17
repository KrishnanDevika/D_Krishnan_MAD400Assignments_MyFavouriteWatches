import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { WatchServiceService } from './services/watch-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Krishnan_MyFavouriteWatches';

  newWatchList: Content[];
  
  constructor(private watchService : WatchServiceService, private logService: LogUpdateService) {
    this.newWatchList = [];
   }
  ngOnInit(): void{
    this.logService.init();
  }

  getIndividualWatch(index : string){
    let id = parseInt(index);
    this.watchService.getIndividualContent(id).subscribe(newWatch =>{
      this.newWatchList.push(newWatch);
    });
  }

  
}



 
