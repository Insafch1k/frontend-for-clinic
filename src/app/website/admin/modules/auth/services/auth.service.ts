import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${API_URL}/admin/login`;
  private authToken = new BehaviorSubject<string | null>(this.getToken());

  constructor(private http: HttpClient) {}

  login(credentials: { login: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        this.setToken(response.token);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.authToken.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  private setToken(token: string): void {
    sessionStorage.setItem('token', token);
    this.authToken.next(token);
  }

  getAuthToken(): BehaviorSubject<string | null> {
    return this.authToken;
  }
}
