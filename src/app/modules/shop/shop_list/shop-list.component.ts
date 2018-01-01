import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}


	ngOnInit(): void {

  }


}
