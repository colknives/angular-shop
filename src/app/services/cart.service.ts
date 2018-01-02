import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { appConfig } from './../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

	constructor(private http: Http) { }

	cart:string[] = [];
    data:string[] = [];

	initCart(){
        localStorage.setItem('cart', ''); 
        return true;
    }

    retrieveCart(){

        if(localStorage.getItem('cart')){
          return JSON.parse(localStorage.getItem('cart'));
        }
        else{
          return false;
        }

    }

    addToCart(product:any, quantity:number){

        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.data = JSON.parse(localStorage.getItem('data')).info;
        let hasMatch:boolean = false;

        //Check if item already exist in cart
        for (var index = 0; index < this.cart.length; ++index ) {

            let cartIndex = this.cart[index];

            if( cartIndex['productid'] == product['productid']){
                hasMatch = true;
                break;
            }
         
        }

        if( hasMatch ){
            return false;
        }

        let total:number = product['price'] * quantity;
        let cartData:any = {
            'productid':product['productid'],
            'name':product['name'],
            'quantity':quantity,
            'price':product['price'],
            'total':total
        };

        this.cart.push(cartData);
        localStorage.setItem('cart', JSON.stringify(this.cart)); 

        return true;

    }

    removeItem(productid:number){

        this.cart = JSON.parse(localStorage.getItem('cart'));
        let tempCart:string[] = [];

        //Check if item already exist in cart
        for (var index = 0; index < this.cart.length; ++index ) {

            let cartIndex = this.cart[index];

            if( cartIndex['productid'] != productid){

              tempCart.push(cartIndex);

            }
         
        }

        this.cart = tempCart;
        localStorage.setItem('cart', JSON.stringify(this.cart)); 

        return this.cart;

    }

    updateQuantity(productid:number, quantity:number){
 
        this.cart = JSON.parse(localStorage.getItem('cart'));
        let tempCart:string[] = [];

        //Check if item already exist in cart
        for (var index = 0; index < this.cart.length; ++index ) {

            let cartIndex = this.cart[index];

            if( cartIndex['productid'] === productid){

                let total:number = cartIndex['price'] * quantity;
                let cartData:any = {
		            'productid':cartIndex['productid'],
		            'name':cartIndex['name'],
		            'quantity':quantity,
		            'price':cartIndex['price'],
		            'total':total
		        };

              tempCart.push(cartData);

            }
            else{
                tempCart.push(cartIndex);
            }
         
        }

        this.cart = tempCart;
        localStorage.setItem('cart', JSON.stringify(this.cart)); 

        return this.cart;

    }

    getTotal(){

        this.cart = JSON.parse(localStorage.getItem('cart'));
        let total:number = 0.00;

        //Check if item already exist in cart
        for (var index = 0; index < this.cart.length; ++index ) {
            let cartIndex = this.cart[index];
            total += cartIndex['total'];
        }

        return total;

    }

    
}