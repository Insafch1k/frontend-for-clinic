import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStock } from './stock.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private readonly http: HttpClient) {}

  getActions(): Observable<IStock[]> {
    return this.http.get<IStock[]>(`${API_URL}/actions`);
  }
}
