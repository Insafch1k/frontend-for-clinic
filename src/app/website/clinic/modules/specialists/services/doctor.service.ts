import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetDoctor } from 'src/app/website/clinic/modules/specialists/spacialict.interface';

@Injectable({
    providedIn: 'root',
})
export class DoctorService {
    constructor(private readonly http: HttpClient) {}

    getDoctor() {
        return this.http.get<IGetDoctor>(`/assets/data/jsons/doctor.json`);
    }

    // sendBid(sendData: IBid) {
    //         console.log(sendData);
    //         return this.http
    //             .post<{ bid_id: number; success: number }>(
    //                 `${API_URL}/bids`,
    //                 sendData
    //             )
    //             .pipe(
    //                 tap((res: any) => {}),
    //                 catchError((err: any) => {
    //                     this.handeError(err);
    //                     throw new Error(err.message);
    //                 })
    //             )
    //             .subscribe((data: { bid_id: number; success: number }) => {
    //                 if (data.success === 1) {
    //                     console.log('Данные отправились');
    //                 }
    //             });
    //     }

    //     private handeError(err: HttpErrorResponse): void {
    //         console.error('Ошибка отправки');
    //     }
}
