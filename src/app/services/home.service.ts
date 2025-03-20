import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
// to register users
export class HomeService {
  private apiUrl = 'http://localhost:8080/api/user/register'; 

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }



  // to login users
  private loginUrl= 'http://localhost:8080/api/user/login';
  
 login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.loginUrl, credentials);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
  
  // to display welcome messaage for testing
  private welcomeUrl = 'http://localhost:8080/api/user';
  getWelcomeMessage(): Observable<any> {
    return this.http.get(this.welcomeUrl,{responseType: 'text'});
  }


}
