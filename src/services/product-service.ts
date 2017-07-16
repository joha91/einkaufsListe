/**
 * Created by Jonas on 15.07.2017.
 */
import {Injectable} from '@angular/core';
import {Product} from './../interfaces/interfaces';

@Injectable()
export class ProductService {
  products : Array<Product>;

  constructor(){
    this.products = [
      {
        name: "Milch",
        price: 1
      },
      {
        name: "Käse",
        price: 1.5
      }
    ]
  }

  getAvailableProducts() {
    return this.products;
  }
}
