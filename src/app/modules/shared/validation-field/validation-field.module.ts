import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { ValidationFieldComponent } from './validation-field.component';

@NgModule({
  declarations: [
    ValidationFieldComponent
  ],
  exports:[
  	ValidationFieldComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ValidationFieldComponent]
})
export class ValidationFieldModule { }
