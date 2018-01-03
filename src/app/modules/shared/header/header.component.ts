import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	constructor(
	    public router: Router,
	    private route: ActivatedRoute,
	    private location: Location,
	    public authService: AuthService
	  ) {}

	logout(){
		this.authService.logout();
		this.router.navigate(['/login']);
	}


}
