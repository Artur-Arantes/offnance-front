import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenUrl } from '../const/open-url.enum';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === OpenUrl.LOGIN.toString().toString()) {
      return next.handle(req);
    }
    return next.handle(req);
  }
}
export const loginInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
];
