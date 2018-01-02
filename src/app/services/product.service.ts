import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { appConfig } from './../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Product } from './../models/product';

@Injectable()
export class ProductService {

	constructor(private http: Http) { }

	get() {
        return this.http.get(appConfig.apiUrl + 'products').map((response: Response) => {
            let product = response.json();
            return product.data as Product;
        });
    }
    
}