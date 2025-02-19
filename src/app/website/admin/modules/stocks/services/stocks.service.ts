import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action, NewAction, ActionResponse, DeleteResponse, Category } from '../stocks.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private baseUrl = `${API_URL}`; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  // Получение всех акций
  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${this.baseUrl}/admin/actions`);
  }

  // Добавление новой акции
  addAction(newAction: NewAction): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(`${this.baseUrl}/admin/actions`, newAction);
  }

  // Удаление акции по ID
  deleteAction(actionId: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.baseUrl}/admin/actions/${actionId}`);
  }


  // Получение категорий
  getCategories(): Observable<Category[]> {
    return this.http.get<{ categories_data: Category[] }>(`${this.baseUrl}/admin/actions_categories`).pipe(
      map(response => response.categories_data)
    );
  }
}
