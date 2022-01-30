import { Content } from "src/app/helper-files/content-interface";

export class ContentList{
    static contentCount = 0;
     _items: Content[];
     result : String = "";

    constructor(){
        this._items = [];
    }

    get items() : Content[]{
        return this._items;
    }

    addItems(newProduct: Content){
        this._items.push(newProduct);
        this.numberOfItems();
    }

    numberOfItems(){
        return ++ContentList.contentCount;
    }

    contentDescription(myWatch : Content): String{ 
         this.result  = "My favourite watch is <strong>"+ myWatch.title+ "</strong> <br>Type: <strong>"+myWatch.type+".</strong><br> Description: <strong>"+myWatch.description+ "</strong><br>You can find the link for the watch below: <br>"+myWatch.imgURL+"<br><br>";
         return this.result;
           
    }
}