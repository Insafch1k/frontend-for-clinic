import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from 'src/app/website/admin/modules/doctors/admin-doctors.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = `${API_URL}/admin/doctors`;
  private doctorsSubject = new BehaviorSubject<Doctor[]>([]);

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  setDoctors(doctors: Doctor[]) {
    this.doctorsSubject.next(doctors);
  }

  getDoctorById(id: number): Doctor | undefined {
    return this.doctorsSubject.getValue().find(doctor => doctor.id === id);
  }

  updateDoctor(id: number, doctor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, doctor).pipe(
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
