import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProductDetailsPage } from '../product-details/product-details';
import { ProductService } from '../../services/product.service';
import {Product} from './../../interfaces/interfaces';


@Component({
  selector: 'page-list',
  templateUrl: 'product-list.html',
  providers: [ProductService]
})
export class ProductListPage {
  items: Array<{title: string, note: string, icon: string}>;
  products: Array<Product>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
    this.products = productService.getAvailableProducts()
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailsPage, {
      product: product
    });
  }
}
