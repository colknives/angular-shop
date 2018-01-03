import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-success',
  templateUrl: './shop-success.component.html',
  styleUrls: ['./shop-success.component.css']
})
export class ShopSuccessComponent implements OnInit {

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {

  }

	ngOnInit(): void {

  }


}
