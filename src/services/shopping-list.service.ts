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
        creator: "Jonas",
        products: [
          {
            name: "Milch",
            price: 1
          },
          {
            name: "Käse",
            price: 1.5
          }
        ]
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
