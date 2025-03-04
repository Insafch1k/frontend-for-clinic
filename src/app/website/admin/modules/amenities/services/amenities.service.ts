import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Service as ServiceModel, Speciality, ApiResponse } from '../amenities.interface';
import { API_URL } from 'src/app/website/core/constants/constant';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {
  private apiUrl = `${API_URL}`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken() || ''}` });
  }

  // Получение всех услуг
  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(`${this.apiUrl}/admin/services`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Добавление новой услуги
  addService(service: { service_name: string, price: number, speciality_id: number }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/admin/services`, service, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Обновление услуги
  updateService(id: number, service: { service_name: string, price: number, speciality_id: number }): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/admin/services/${id}`, service, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Удаление услуги
  deleteService(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/admin/services/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // Получение всех специалистов
  getSpecialities(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(`${this.apiUrl}/admin/specialties`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Неизвестная ошибка!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Ошибка: ${error.error.message}`;
    } else {
      errorMessage = `Код ошибки: ${error.status}\nСообщение: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
