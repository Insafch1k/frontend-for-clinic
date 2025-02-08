import { Injectable } from '@angular/core';
import { IStock } from './stock.interface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class StockService {
    actions!: IStock[];

    constructor(private readonly http: HttpClient) {}

    getActions() {
        return this.http.get<IStock[]>(`${API_URL}/actions`);
    }
}
