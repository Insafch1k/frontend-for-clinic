import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IDoctorFull } from '../spacialict.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class DoctorService {
    constructor(private readonly http: HttpClient) {}

    getDoctor(doctorId: number): Observable<IDoctorFull> {
        return this.http.get<IDoctorFull>(`${API_URL}/doctors/${doctorId}`).pipe(
            catchError((error) => {
                console.error('Ошибка при запросе данных о враче:', error);
                return throwError(() => new Error('Не удалось загрузить данные о враче'));
            })
        );
    }
}
