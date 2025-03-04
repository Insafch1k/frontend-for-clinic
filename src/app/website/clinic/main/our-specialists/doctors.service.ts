import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctorsResponse } from './doctor.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class DoctorsService {
    constructor(private http: HttpClient) {}

    getDoctors(): Observable<IDoctorsResponse> {
        return this.http.get<IDoctorsResponse>(`${API_URL}/main/doctors`);
    }
}
