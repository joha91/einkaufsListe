import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {ShoppingListService} from './../../services/shopping-list.service'
import {NewShoppingListPage} from './../new-shopping-list/new-shopping-list'
import {ShoppingList} from './../../interfaces/interfaces'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'shopping-list.html',
  providers: [ShoppingListService]
})
export class ShoppingListPage {
  availableShoppingLists: Array<ShoppingList>;
  selectedShoppingList: ShoppingList;
  constructor(public navCtrl: NavController, shoppingListService: ShoppingListService ) {
    this.availableShoppingLists = shoppingListService.getAvailableShoppingLists()
  }

  createNewShoppingList() {
    this.navCtrl.push(NewShoppingListPage);
  }

}
