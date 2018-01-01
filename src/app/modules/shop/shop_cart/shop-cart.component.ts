import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}


	ngOnInit(): void {

  }


}
