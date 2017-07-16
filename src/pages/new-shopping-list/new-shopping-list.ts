import { Component } from '@angular/core';
import {ShoppingList} from '../../interfaces/interfaces'

@Component({
  selector: 'new-shopping-page',
  templateUrl: 'new-shopping-list.html'
})
export class NewShoppingListPage {
  shoppingList: ShoppingList = {
    name: '',
    creator: ''
  };
  constructor( ) {

  }

  submit(){
    console.log("store", this.shoppingList)
  }

}
