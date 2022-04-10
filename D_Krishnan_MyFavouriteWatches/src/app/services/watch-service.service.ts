import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_WATCHES } from '../helper-files/contentDb';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WatchServiceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' }) };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContentObs(): Observable<Content[]>{
    console.log("Get content from the server");
    
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{ 
    console.log("Added new Content", newContentItem);
    return this.http.post<Content>("api/content",newContentItem, this.httpOptions); 
  }

   // content item needs to have the id set correctly
   updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem,  this.httpOptions);
  }

  getIndividualContent(index: number): Observable<Content>{
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Content>("api/content/" + index);
    // let newWatch : any ;
    // if(index > FAVOURITE_WATCHES.length){
    //   this.messageService.add(`Entered Id ${index} was not in the list. Out of index`);
    //   return of(newWatch);
      
    // }else{
    // this.messageService.add(`Watch from WatchList at id: ${index} Loaded!`);
    // return of(FAVOURITE_WATCHES[index]);
    // }
  

  }
}
