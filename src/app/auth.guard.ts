import {AuthService} from "./auth.service";
import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      var token=localStorage.getItem("token");
    if (this.authService.getAccessToken() == ""||this.authService.getAccessToken()==undefined) {
      this.router.navigate(["login"]);
      return false;
    }else
    return true;
  }
}
