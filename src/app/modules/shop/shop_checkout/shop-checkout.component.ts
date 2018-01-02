import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { CartService } from './../../../services/cart.service';
import { ValidationFieldService } from '../../../services/validation-field.service';


declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrls: ['./shop-checkout.component.css']
})
export class ShopCheckoutComponent implements OnInit {

  shippingForm: FormGroup;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private validationFieldService: ValidationFieldService,
    private fb: FormBuilder
  ) {

    this.shippingForm = fb.group({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email]),
      'phone': new FormControl(null, [
        Validators.required]),
      'bldg_unit': new FormControl(null, [
        Validators.required]),
      'street': new FormControl(null, [
        Validators.required]),
      'city': new FormControl(null, [
        Validators.required]),
      'country': new FormControl(null, [
        Validators.required]),
      'postal': new FormControl(null, [
        Validators.required]),
    });

    //Initialize validation service
    this.validationFieldService.initializeForm(this.shippingForm);

  }

	ngOnInit(): void {

  }

  save(){

    if (this.shippingForm.valid) {

      // this.getRegion();
      // this.nextTab();

    } else {
      this.validationFieldService.validateAllFormFields(this.shippingForm);
    }

  }

  


}
