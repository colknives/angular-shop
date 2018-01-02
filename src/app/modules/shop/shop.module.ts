import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SharedModule } from './../shared/shared.module';
import { ValidationFieldModule } from './../shared/validation-field/validation-field.module';

import { AuthGuard } from '../../guards/auth-guard.service';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop_list/shop-list.component';
import { ShopCartComponent } from './shop_cart/shop-cart.component';
import { ShopCheckoutComponent } from './shop_checkout/shop-checkout.component';

import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { ValidationFieldService } from './../../services/validation-field.service';


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
    },
    { 
      path: 'checkout',  
      component: ShopComponent, 
      // canActivate: [AuthGuard],
      children: [
        { path: '', component: ShopCheckoutComponent },
        { path: 'details', component: ShopCheckoutComponent }
      ] 
    }
];

@NgModule({
  declarations: [
    ShopComponent,
    ShopListComponent,
    ShopCartComponent,
    ShopCheckoutComponent
  ],
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ValidationFieldModule
  ],
  providers: [
    AuthGuard,
    ProductService,
    CartService,
    ValidationFieldService
  ],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
