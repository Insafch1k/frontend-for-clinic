import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action, NewAction, ActionResponse, DeleteResponse, Category } from '../stocks.interface';
import { API_URL } from 'src/app/website/core/constants/constant';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private baseUrl = `${API_URL}`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken() || ''}` });
  }

  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${this.baseUrl}/admin/actions`, { headers: this.getHeaders() });
  }

  addAction(newAction: NewAction): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(`${this.baseUrl}/admin/actions`, newAction, { headers: this.getHeaders() });
  }

  deleteAction(actionId: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.baseUrl}/admin/actions/${actionId}`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<{ categories_data: Category[] }>(`${this.baseUrl}/admin/actions_categories`, { headers: this.getHeaders() }).pipe(
      map(response => response.categories_data)
    );
  }
}
