import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token =  localStorage.getItem('token')
    const newReq = request.clone(
      {
        headers: new HttpHeaders().set('Token', token)
      }
    );

    if (!!token) {
      return next.handle(newReq);
    }
  }

}

export const AuthentificationInterceptorProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
 };
