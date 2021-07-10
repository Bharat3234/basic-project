import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerService } from '../services/manager.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {

  constructor(
    private managerService: ManagerService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.managerService.userType;
    if (user == 'ADMIN') {
      return true
    } else {
      return false
    }
  }
}
