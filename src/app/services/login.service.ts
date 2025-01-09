import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginData } from '../classes/login';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private Http = inject(HttpClient);
  private url: string = environment.url;
  private router = inject(Router);

  public sendLogin(login: string, password: string): Observable<loginData> {
    // return this.Http.post(`${this.url}/login`, { email, password });
    let urlLogin: string = `${this.url}/login?login=${login}&password=${password}`;
    return this.Http.post<loginData>(urlLogin, null);
  }

  public refreshLogin(refresh_token: string): Observable<loginData> {
    let urlRefresh: string = `${this.url}/login?refresh_token=${refresh_token}`;
    return this.Http.post<loginData>(urlRefresh, null);
  }
}

//https://api.escuelajs.co/api/v1/auth/login/?email=john@mail.com&password=changeme
