import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveAuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private tokenService: TokenStorageService,
      private router: Router) {
  }
  canLoad(route: Route): boolean | Promise<boolean> | Observable<boolean> {
      return this.authenticade();
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.authenticade();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.authenticade();
  }
  private authenticade(): Observable<boolean> {
      return this.tokenService.isLoggedIn().pipe(
       take(1), map(authState => !!authState),
       tap(authState => {
          if (!authState) {
              this.router.navigate(['/login'], { queryParams: { mensagem: 'login-invalido' } });
          }
      }));
  }
}
