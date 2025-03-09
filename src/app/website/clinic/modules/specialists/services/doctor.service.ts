import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IDoctorProfileFull } from '../spacialict.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class DoctorService {
    constructor(private readonly http: HttpClient) {}

    getDoctor(doctorId: number): Observable<IDoctorProfileFull> {
        return this.http.get<IDoctorProfileFull>(`${API_URL}/doctors/${doctorId}`).pipe(
            catchError((error) => {
                console.error('Ошибка при запросе данных о враче:', error);
                return throwError(() => new Error('Не удалось загрузить данные о враче'));
            })
        );
    }
      // Получение услуг по специальности
    getServices(specialtyId: number): Observable<any[]> {
        return this.http.get<any[]>(`${API_URL}/services?specialty_id=${specialtyId}`);
    }

    // Создание записи
    createAppointment(appointmentData: any): Observable<any> {
        return this.http.post<any>(`${API_URL}/appointments`, appointmentData);
    }

    // Подтверждение записи
    confirmAppointment(code: string, mobile: string): Observable<any> {
        return this.http.post<any>(`${API_URL}/appointments/confirm`, { code, mobile });
    }
}