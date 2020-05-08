import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList ;

  cart;
  constructor() { }

  ngOnInit(): void {
    console.log("Ng on init of product list");
    this.productsList = products;
    this.cart = new Cart();
  }
  share(){
   	window.alert('This producthas been shared');
  }

  addToCart(product: any){
    this.cart.addToCart(product);
    
  }

  onNotify(){
  	window.alert('You will be notified when the product goes on sale');
  }

}
