import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.api+'/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username.trim());
    formData.append('password', password.trim());
    return this.http.post(AUTH_API, formData);
  }
}