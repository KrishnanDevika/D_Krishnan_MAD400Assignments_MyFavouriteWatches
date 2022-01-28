import { Content } from 'src/app/helper-files/content-interface';
export class ContentList{
    static contentCount = 0;
     _items: Content[];

    constructor(){
        this._items = [];
    }

    get items() : Content[]{
        return this._items;
    }

    addItems(newProduct: Content){
        this._items.push(newProduct);
    }

    numberOfItems(){
        return ++ContentList.contentCount;
    }

    contentDescription(myWatch : Content): void{ 
            console.log("My favourite watch is ", myWatch.title, "and its of brand ", myWatch.description);

    }
}