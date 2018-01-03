import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { CartService } from './../../../services/cart.service';
import { OrderService } from './../../../services/order.service';
import { ValidationFieldService } from '../../../services/validation-field.service';


declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-confirm',
  templateUrl: './shop-confirm.component.html',
  styleUrls: ['./shop-confirm.component.css']
})
export class ShopConfirmComponent implements OnInit {

  shippingInfo:string[] = [];
  userInfo:string[] = [];
  cart:string[] = [];
  grandTotal:number = 0.00;
  shipData:any;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
    private orderService: OrderService,
    private validationFieldService: ValidationFieldService,
    private fb: FormBuilder
  ) {

  }

	ngOnInit(): void {
    this.cart = this.cartService.retrieveCart();
    this.grandTotal = this.cartService.getTotal();
    this.shipData = JSON.parse(localStorage.getItem('shipDetail'));
    this.userInfo = JSON.parse(localStorage.getItem('data'));
  }

  submit(){

    let orderData:any = {
      'userid':this.userInfo['userid'],
      'order_items':JSON.stringify(this.cart),
      'bldg_unit':this.shipData.bldg_unit,
      'city':this.shipData.city,
      'country':this.shipData.country,
      'contact_person':this.shipData.contact_person,
      'email':this.shipData.email,
      'phone':this.shipData.phone,
      'postal':this.shipData.postal,
      'street':this.shipData.street,
      'grandTotal':this.grandTotal
    };

    this.orderService.submit(orderData)
      .subscribe(
          data => {
            this.router.navigate(['/checkout/success']);
          });


  }

}
