/**
 * Created by Jonas on 15.07.2017.
 */
import {Injectable} from '@angular/core';
import {ShoppingList} from './../interfaces/interfaces';

@Injectable()
export class ShoppingListService {
  shoppingLists : Array<ShoppingList>;

  constructor(){
    this.shoppingLists = [
      {
        name: "Einkaufslist Jonas",
        creator: "Jonas"
      },
      {
        name: "Einkaufsliste Anna",
        creator: "Anna"
      },
      {
        name: "Einkaufsliste Monika",
        creator: "Monika"
      }
    ]
  }

  getAvailableShoppingLists() {
    return this.shoppingLists;
  }
}
