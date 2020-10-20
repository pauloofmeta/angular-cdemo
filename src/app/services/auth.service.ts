import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:1337'

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { email, password });
  }

  signUp(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/sign-up`;
    return this.http.post<User>(url, { email, password });
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
