import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBid } from './main-bid.interface';
import { API_URL } from '../../core/constants/constant';
import { catchError, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BidService {
    constructor(private http: HttpClient) {}

    sendBid(sendData: IBid) {
        console.log(sendData);
        return this.http
            .post<{ bid_id: number; success: number }>(
                `${API_URL}/bids`,
                sendData
            )
            .pipe(
                tap((res: any) => {}),
                catchError((err: any) => {
                    this.handeError(err);
                    throw new Error(err.message);
                })
            )
            .subscribe((data: { bid_id: number; success: number }) => {
                if (data.success === 1) {
                    console.log('Данные отправились');
                }
            });
    }

    private handeError(err: HttpErrorResponse): void {
        console.error('Ошибка отправки');
    }
}
