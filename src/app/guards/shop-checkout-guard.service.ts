import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';


@Injectable()
export class ShopCheckoutGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    return this.checkCart();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkCart();
  }

  checkCart(): boolean {
    if( JSON.parse(localStorage.getItem('cart')).length > 0  ){
      return true;
    }

    // // not logged in so redirect to login page with the return url
    this.router.navigate(['/shop']);
    return false;
  }
}