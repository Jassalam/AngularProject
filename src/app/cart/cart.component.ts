import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList =[];
  totalCost = 0;
  cartDict;
  constructor() { }

  ngOnInit(): void {
    this.cartDict = (new Cart()).getCartList();
    for (let k in this.cartDict){
      this.cartList.push(this.cartDict[k]);
    }
    this.calculatePrice();
  }

  calculatePrice(){
    for(let k in this.cartDict){
      this.totalCost += this.cartDict[k].price;
    }
      
  }

  removeItem(product:any){
    (new Cart()).removeItem(product);
  }

}
