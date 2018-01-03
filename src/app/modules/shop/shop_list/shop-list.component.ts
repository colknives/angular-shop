import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './../../../models/product'; 
import { ProductService } from './../../../services/product.service';
import { CartService } from './../../../services/cart.service';


declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  
  originalProduct:Product;
  products:any;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private cartService: CartService,
  ) {}


	ngOnInit(): void {

    this.productService.get()
          .subscribe(
            data => {
              this.originalProduct = data;
              this.products = this.originalProduct;
        });

  }

  addToCart(e, book:any, quantity:number){

    if( quantity > 0 ){

        if( this.cartService.addToCart(book,quantity) == true ){
          swal("Item Successfully Added", "The item selected was successfully added to cart.", "success");
        }
        else{

          swal({
            title: 'Failed to add Item',
            text: "The item selected was unsuccessfully added to cart due to it already exist in cart.",
            type: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'View Cart'
          }).then( () => {
            
            this.router.navigate(['/cart']);

          }).catch(swal.noop);

        }
        
      }

  }

  searchItem(search){

    let tempProducts:string[] = [];
    this.products = this.originalProduct;

    for (var index = 0; index < this.products.length; ++index ) {

      let currentItem = this.products[index];

      if( currentItem['name'].indexOf(search) > -1){
        tempProducts.push(currentItem);
      }
       
    }

    this.products = tempProducts;

  }


}
