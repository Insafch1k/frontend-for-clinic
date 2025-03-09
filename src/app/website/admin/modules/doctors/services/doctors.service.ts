import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from 'src/app/website/admin/modules/doctors/admin-doctors.interface';
import { API_URL } from 'src/app/website/core/constants/constant';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = `${API_URL}/admin/doctors`;
  private doctorsSubject = new BehaviorSubject<Doctor[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken() || ''}` });
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
  }

  setDoctors(doctors: Doctor[]) {
    this.doctorsSubject.next(doctors);
  }

  getDoctorById(id: number): Doctor | undefined {
    return this.doctorsSubject.getValue().find(doctor => doctor.id === id);
  }

  updateDoctor(id: number, doctor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, doctor, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
  }

  refreshBranches(): Observable<any> {
    return this.http.post(`${API_URL}/admin/branches`, {}, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
  }

  refreshSpecialties(): Observable<any> {
    return this.http.post(`${API_URL}/admin/specialties`, {}, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
  }

  refreshDoctors(): Observable<any> {
    return this.http.post(this.apiUrl, {}, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
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
