import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { LoginComponent } from './login/login.component';

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
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
