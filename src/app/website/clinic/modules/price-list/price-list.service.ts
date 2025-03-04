import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from './price-list.interfase';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class PriceListService {

    constructor(private http: HttpClient) {}

    getServices() {
        return this.http.get<IService[]>(`${API_URL}/services`);
    }

    downloadPriceList(specialist: string): Observable<Blob> {
        return this.http.get(`${API_URL}/price-list/${specialist}/download`, {
            responseType: 'blob',
        });
    }

    downloadFullPriceList(): Observable<Blob> {
        return this.http.get(`${API_URL}/price-list/full/download`, {
            responseType: 'blob',
        });
    }
}
