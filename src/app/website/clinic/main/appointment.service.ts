import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from '../../core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) {}

  // Получение специальностей
  getSpecialties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/specialties`);
  }

  // Получение услуг по специальности
  getServices(specialtyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services?specialty_id=${specialtyId}`);
  }

  // Получение врачей по специальности
  getDoctors(specialtyId: number): Observable<any[]> {
    console.log('Fetching doctors for specialty ID:', specialtyId); // Проверка specialty_id
    const url = `${this.apiUrl}/records/doctors?specialty_id=${specialtyId}`;
    console.log('Request URL:', url); // Проверка URL
    return this.http.get<any[]>(url);
  }

  // Получение доступного времени для врача
  getAvailableTimes(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/records/available-times?id_easyclinic=${doctorId}`);
  }

  // Создание записи
  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, appointmentData).pipe(
      catchError((error) => {
        console.error('Ошибка при создании записи:', error);
        return throwError(error);
      })
    );
  }

  // Подтверждение записи
  confirmAppointment(code: string, mobile: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments/confirm`, { code, mobile });
  }
}
