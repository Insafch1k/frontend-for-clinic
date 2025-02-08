// analyzes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppointmentRequest, Analysis } from 'src/app/website/core/types/admin-analyzes.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AnalyzesService {
  private apiUrl = `${API_URL}/admin`;

  constructor(private http: HttpClient) {}

  getRequests(): Observable<AppointmentRequest[]> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.http.get<AppointmentRequest[]>(`${this.apiUrl}/analysis-categories`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRequest(analysisId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/analyses/${analysisId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  addCategory(category: any): Observable<{ success: boolean }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Отправляемые данные:', JSON.stringify(category));
    console.log('Заголовки:', headers);
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/categories`, JSON.stringify(category), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAnalyses(): Observable<Analysis[]> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    console.log('Загрузка анализов...');
    return this.http.get<Analysis[]>(`${this.apiUrl}/analyses`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ошибка:', error);
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred.
        console.error('Произошла ошибка:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        console.error(`Код ошибки: ${error.status}, сообщение: ${error.message}`);
    }
    return throwError('Что-то пошло не так; попробуйте позже.');
}
}
