import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { ValidationFieldService } from '../../../services/validation-field.service';

@Component({
    moduleId: module.id,
    selector: 'validation-field',
    templateUrl: 'validation-field.component.html',
    styleUrls: [ './validation-field.component.css' ]
})
 
export class ValidationFieldComponent {
    message: any;
    @Input() displayError: boolean;
    @Input() field: string;
    @Input() errorMsg: string[];
    
}