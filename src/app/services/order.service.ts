import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { appConfig } from './../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Order } from './../models/order';

@Injectable()
export class OrderService {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	submit(data) {

        return this.http.post(appConfig.apiUrl + 'checkout', JSON.stringify({data:data}), {headers: this.headers})
        .map((response: Response) => {

            let order = response.json();

            if (order && order.status) {
              //Initialize cart
              localStorage.setItem('cart', JSON.stringify([])); 

              //Initialize cart
              localStorage.setItem('shipDetail', JSON.stringify([])); 

            }

            return order;
        });
    }
    
}