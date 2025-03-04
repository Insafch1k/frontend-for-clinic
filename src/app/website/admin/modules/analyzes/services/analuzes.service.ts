import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analysis, Category, NewAnalysis, NewCategory } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';
import { API_URL } from 'src/app/website/core/constants/constant';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyzesService {
  private baseUrl = `${API_URL}/admin`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken() || ''}` });
  }

  getAnalyses(): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(`${this.baseUrl}/analysis`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`, { headers: this.getHeaders() });
  }

  addAnalysis(newAnalysis: NewAnalysis): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.baseUrl}/analysis`, newAnalysis, { headers: this.getHeaders() });
  }

  updateAnalysis(id: number, updatedAnalysis: NewAnalysis): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.baseUrl}/analysis/${id}`, updatedAnalysis, { headers: this.getHeaders() });
  }

  deleteAnalysis(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/analysis/${id}`, { headers: this.getHeaders() });
  }

  addCategory(newCategory: NewCategory): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.baseUrl}/categories`, newCategory, { headers: this.getHeaders() });
  }

  updateCategory(id: number, updatedCategory: NewCategory): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.baseUrl}/categories/${id}`, updatedCategory, { headers: this.getHeaders() });
  }

  deleteCategory(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/categories/${id}`, { headers: this.getHeaders() });
  }
}
