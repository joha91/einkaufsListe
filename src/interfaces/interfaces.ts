/**
 * Created by Jonas on 16.07.2017.
 */

export interface Product {
  price: number;
  name: string;
}


export interface ShoppingList {
  name: string;
  creator: string;
  products?: Array<Product>;  // ? => optional parameter
}
