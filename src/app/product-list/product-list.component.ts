import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList ;

  constructor() { }

  ngOnInit(): void {
    console.log("Ng on init of product list");
    this.productsList = products;
  }
  share(){
   	window.alert('This producthas been shared');
  }

  onNotify(){
  	window.alert('You will be notified when the product goes on sale');
  }

}
