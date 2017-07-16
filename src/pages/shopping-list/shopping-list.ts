import { Component } from '@angular/core';
import {ShoppingListService} from './../../services/shopping-list.service'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'shopping-list.html',
  providers: [ShoppingListService]
})
export class ShoppingListPage {
  availableShoppingLists: any;
  selectedShoppingList: any;
  constructor( shoppingListService: ShoppingListService ) {
    this.availableShoppingLists= shoppingListService.getAvailableShoppingLists()
  }
}
