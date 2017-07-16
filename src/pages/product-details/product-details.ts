import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Product} from './../../interfaces/interfaces';


@Component({
  selector: 'page-item-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  selectedProduct: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedProduct = navParams.get('product');
  }
}
