import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { WatchServiceService } from '../services/watch-service.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

 
  watches: Content[];
  
  constructor(private watchService : WatchServiceService, private messageService : MessageService) {
    this.watches = []
   }

  ngOnInit(): void{
    this.getContentFromServer();
 
   }

   getContentFromServer(): void{
    this.watchService.getContentObs().subscribe(watchList =>{
      this.watches = watchList;
       console.log("Get content from server :", watchList);
    });

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


  addWatchToList(newWatchEvent : Content): void{
    this.watchService.addContent(newWatchEvent).subscribe(newContentFromServer => {
      console.log("content added from server ", newContentFromServer);
      this.getContentFromServer();
     // this.watches.push(newContentFromServer)
      console.log(this.watches);
      this.messageService.add(`A ${newContentFromServer.title} watch addded to the list! `);
      this.watches = [...this.watches];
    });

  }

  updateWatchInList(contentItem: Content): void{
    var isValidID;
    for( var watch of this.watches){
      if (contentItem.id == watch.id){
        
        this.watchService.updateContent(contentItem).subscribe(() => {
          // this.pokemonsters[contentItem.id ?? 0] = contentItem;
          this.messageService.add(`A ${contentItem.title} watch Updated to the list! `);

          console.log("Content updated successfully")
          this.getContentFromServer();
        });
        isValidID = true;
        break;

      }
      else{
          isValidID = false;
      }
    }

  if(isValidID == false)
  {
    this.messageService.add(`A Watch with that id not exists`);
    console.log("Watch with that id not exists");
  }
    
 

  }

}
