import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service as ServiceModel, Speciality, ApiResponse } from '../amenities.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {
    private apiUrl = `${API_URL}`;

  constructor(private http: HttpClient) {}

  // Получение всех услуг
  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(`${this.apiUrl}/admin/services`);
  }

  // Добавление новой услуги
  addService(service: { service_name: string, price: number, speciality_id: number }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/admin/services`, service);
  }

  // Обновление услуги
  updateService(id: number, service: { service_name: string, price: number, speciality_id: number }): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/admin/services/${id}`, service);
  }

  // Удаление услуги
  deleteService(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/admin/services/${id}`);
  }

  // Получение всех специалистов
  getSpecialities(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(`${this.apiUrl}/admin/specialties`);
  }
}
