import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SharedModule } from './../shared/shared.module';

import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop_list/shop-list.component';
import { ShopCartComponent } from './shop_cart/shop-cart.component';

export const routes: Routes = [
    { 
      path: 'shop',  
      component: ShopComponent, 
      children: [
        { path: '', component: ShopListComponent }
      ] 
    },
    { 
      path: 'cart',  
      component: ShopComponent, 
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
  ],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
