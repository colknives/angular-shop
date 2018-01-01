import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
  	BrowserModule,
    CommonModule,
  	RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
