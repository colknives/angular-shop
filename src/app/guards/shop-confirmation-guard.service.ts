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
export class ShopConfirmationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    return this.checkDetails();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkDetails();
  }

  checkDetails(): boolean {

    if( JSON.parse(localStorage.getItem('cart')).length > 0 && JSON.parse(localStorage.getItem('shipDetail')) > 0 ){
      return true;
    }

    // // not logged in so redirect to login page with the return url
    this.router.navigate(['/shop']);
    return false;

  }
}