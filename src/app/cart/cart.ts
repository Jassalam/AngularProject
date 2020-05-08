var cartList:any = {};

export class Cart{
    
    addToCart(product:any){
        
        
        if(!cartList[product.name]){
            cartList[product.name] = product;
            window.alert('This item has been added to cart');
        }else{
            window.alert('Item is already in the list');
        }
        console.log(cartList);
    }

    removeItem(product:any){
        delete cartList[product.name];
        console.log(cartList);
        window.alert("The item has been removed from cart");
    }
    getCartList(){
        return cartList;
    }
};
