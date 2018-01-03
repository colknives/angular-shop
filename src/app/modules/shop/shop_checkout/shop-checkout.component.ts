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
  shipData:any;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private validationFieldService: ValidationFieldService,
    private fb: FormBuilder
  ) {

    this.shippingForm = fb.group({
      'contact_person': new FormControl(null, [
        Validators.required]),
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

    if( localStorage.getItem('shipDetail') ){
      this.shipData = JSON.parse(localStorage.getItem('shipDetail'));

      this.shippingForm.patchValue({
        'contact_person': this.shipData.contact_person,
        'email': this.shipData.email,
        'phone': this.shipData.phone,
        'bldg_unit': this.shipData.bldg_unit,
        'street': this.shipData.street,
        'city': this.shipData.city,
        'country': this.shipData.country,
        'postal': this.shipData.postal
      });

    }

  }

  save(data){

    if (this.shippingForm.valid) {

      this.shipData = {
          'bldg_unit':data['bldg_unit'],
          'city':data['city'],
          'country':data['country'],
          'contact_person':data['contact_person'],
          'email':data['email'],
          'phone':data['phone'],
          'postal':data['postal'],
          'street':data['street']
      };

      localStorage.setItem('shipDetail', JSON.stringify(this.shipData)); 
      this.router.navigate(['/checkout/confirm']);

    } else {
      this.validationFieldService.validateAllFormFields(this.shippingForm);
    }

  }

  


}
