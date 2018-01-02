import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

// import { CustomerService } from './customer.service'; 
 
@Injectable()
export class ValidationFieldService {
    private subject = new Subject<any>();
    // private customerService: CustomerService;

    form: FormGroup;
    private formSumitAttempt: boolean;
    msg: string[];

    initializeForm(form: FormGroup){
        this.form = form;
    }
 
    isFieldValid(field: string) {

        return (
          (!this.form.get(field).valid && this.form.get(field).touched) ||
          (this.form.get(field).untouched && this.formSumitAttempt)
        );
    }

    displayFieldCss(field: string) {
        return {
          'has-danger': this.isFieldValid(field)
        };
    }

    getError(field: string, label:string){

        let msg: string;

       if(this.isFieldValid(field)){

           if( this.form.get(field).errors.required ){
               msg = label + " is required";
           }

           if( this.form.get(field).errors.email ){
               msg = label + " must be a valid email address";
           }

           if( this.form.get(field).errors.emailExist ){
               msg = label + " already exist";
           }

           if( this.form.get(field).errors.maxlength ){
               msg = label + " must not exceed 8 digits in length";
           }
       }

       return msg;
    }

    validateAllFormFields(formGroup: FormGroup) {

        this.formSumitAttempt = true;

        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
          }
        });
    }

    // customerEmailExistValidator(): ValidatorFn {
    //   return (control: AbstractControl): {[key: string]: any} => {

    //     return {'emailExist': {value: true}};

    //    // return this.customerService.checkCustomerEmailExist(control.value).map( response =>
    //    // {

    //    //     let email = response.json();
    //    //     return email.status ? {'emailExist': {value: email.status}} : false;

    //    // });

    //   };
    // }


}