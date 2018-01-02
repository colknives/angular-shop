import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SharedModule } from './../shared/shared.module';

import { AuthGuard } from '../../guards/auth-guard.service';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop_list/shop-list.component';
import { ShopCartComponent } from './shop_cart/shop-cart.component';

import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';


export const routes: Routes = [
    { 
      path: 'shop',  
      component: ShopComponent, 
      // canActivate: [AuthGuard],
      children: [
        { path: '', component: ShopListComponent }
      ] 
    },
    { 
      path: 'cart',  
      component: ShopComponent, 
      // canActivate: [AuthGuard],
      children: [
        { path: '', component: ShopCartComponent }
      ] 
    }
];

@NgModule({
  declarations: [
    ShopComponent,
    ShopListComponent,
    ShopCartComponent
  ],
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    ProductService,
    CartService
  ],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
