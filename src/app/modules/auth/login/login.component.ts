import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'as-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public authService: AuthService
  ) {}


	ngOnInit(): void {

    // reset login status
    this.authService.logout();

    this.loginForm = this.fb.group({
      'username': new FormControl(null, []),
      'password': new FormControl(null, []),
    });

  }

  login(data){

    this.authService.login(data.username,data.password)
      .subscribe(
          data => {
            this.router.navigate(['/shop']);
          });

  }


}
