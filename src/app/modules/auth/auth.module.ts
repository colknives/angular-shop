import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { LoginGuard } from '../../guards/login-guard.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../services/auth.service';

export const routes: Routes = [
    { 
      path: 'login',  
      component: LoginComponent, 
      canActivate: [LoginGuard],
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
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    LoginGuard
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
