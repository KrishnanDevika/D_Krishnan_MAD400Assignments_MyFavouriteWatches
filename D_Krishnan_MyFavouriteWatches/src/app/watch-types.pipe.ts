import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'watchTypes'
})
export class WatchTypesPipe implements PipeTransform {

  transform(watchList: Content[], type?: string){
    return watchList.filter(watch => {
      return type? watch.type === type : (!watch.type || watch.type === '');
    });
    }
  }

