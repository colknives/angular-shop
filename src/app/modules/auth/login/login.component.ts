import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}


	ngOnInit(): void {

  	}


}
