import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analysis, Category, NewAnalysis, NewCategory } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AnalyzesService {
  private baseUrl = `${API_URL}/admin`;

  constructor(private http: HttpClient) {}

  // Получение всех анализов
  getAnalyses(): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(`${this.baseUrl}/analysis`);
  }

  // Получение всех категорий
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  // Добавление нового анализа
  addAnalysis(newAnalysis: NewAnalysis): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.baseUrl}/analysis`, newAnalysis);
  }

  // Обновление анализа
  updateAnalysis(id: number, updatedAnalysis: NewAnalysis): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.baseUrl}/analysis/${id}`, updatedAnalysis);
  }

  // Удаление анализа
  deleteAnalysis(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/analysis/${id}`);
  }

  // Добавление новой категории
  addCategory(newCategory: NewCategory): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.baseUrl}/categories`, newCategory);
  }

  // Обновление категории
  updateCategory(id: number, updatedCategory: NewCategory): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.baseUrl}/categories/${id}`, updatedCategory);
  }

  // Удаление категории
  deleteCategory(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.baseUrl}/categories/${id}`);
  }
}
