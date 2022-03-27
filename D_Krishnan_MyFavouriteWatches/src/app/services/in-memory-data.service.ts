import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_WATCHES } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  constructor() { }

  createDb() {
      const content : Content[] = FAVOURITE_WATCHES;
      return {content};
  }

  getId(content: Content[]):number{
    return content.length > 0 ? Math.max(...content.map(c => {return c.id ?? 0})) + 1 : 2000;
  }
}
