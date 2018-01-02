import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { AuthService } from '../../services/auth.service';

export const routes: Routes = [
    { 
      path: 'login',  
      component: LoginComponent, 
    }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
