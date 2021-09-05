import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItemsBasic(){
    return [
      {
        id: 1,
        title:"eat", 
        checked: false
      }, 
      {
        id: 2,
        title:"pray", 
        checked: false
      }, 
      {
        id: 3,
        title:"love", 
        checked: false
      },
    ];
  }
}
