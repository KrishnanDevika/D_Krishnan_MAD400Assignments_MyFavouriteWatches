import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { FAVOURITE_WATCHES } from './helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WatchServiceService {

  constructor(private messageService: MessageService) { }

  getContentObs(): Observable<Content[]>{
    this.messageService.add("All Favourite Watches Loaded!");
    return of(FAVOURITE_WATCHES);

  }

  getIndividualContent(index: number): Observable<Content>{
    let newWatch : any ;
    if(index > FAVOURITE_WATCHES.length){
      this.messageService.add(`Entered Id ${index} was not in the list. Out of index`);
      return of(newWatch);
      
    }else{
    this.messageService.add(`Watch from WatchList at id: ${index} Loaded!`);
    return of(FAVOURITE_WATCHES[index]);
    }
  

  }
}
