import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { WatchServiceService } from '../services/watch-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  
  id?: number;
  watch?: Content;
  constructor(private route: ActivatedRoute, private watchService: WatchServiceService, private messageService : MessageService)  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("this is really bad, how did the id not get set?");
      }
      this.id = Number(params.get('id') ?? "0"); 
      this.watchService.getIndividualContent(this.id).subscribe((singleContent) => {
        this.watch = singleContent;
        this.messageService.add(`A ${this.watch?.title} of id ${this.watch?.id} retrieved from the list! `);

      });

    });
  }

}
