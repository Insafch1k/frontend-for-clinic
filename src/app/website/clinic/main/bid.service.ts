import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBid } from './main-bid.interface';
import { API_URL } from '../../core/constants/constant';
import { catchError, tap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BidService {
    constructor(private http: HttpClient) {}

    sendBid(sendData: IBid) {
        return this.http
            .post<{ success: boolean }>(`${API_URL}/main/records`, sendData)
            .pipe(
                tap((res: any) => {
                    if (res.success) {
                        console.log('Данные успешно отправлены');
                    }
                }),
                catchError((err: HttpErrorResponse) => {
                    this.handleError(err);
                    throw new Error(err.message);
                })
            )
            .subscribe();
    }

    getSpecialties(): Observable<any[]> {
        return this.http.get<any[]>(`${API_URL}/specialties`).pipe(
            tap((res: any) => {
                console.log('Специальности загружены');
            }),
            catchError((err: HttpErrorResponse) => {
                this.handleError(err);
                throw new Error(err.message);
            })
        );
    }

    private handleError(err: HttpErrorResponse): void {
        console.error('Ошибка отправки');
    }
}
