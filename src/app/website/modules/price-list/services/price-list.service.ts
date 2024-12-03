import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {
  private API = 'Покага просто пример'; 

  constructor(private http: HttpClient) {}

  downloadPriceList(specialist: string): Observable<Blob> {
    return this.http.get(`${this.API}/price-list/${specialist}/download`, { responseType: 'blob' });
  }

  downloadFullPriceList(): Observable<Blob> {
    return this.http.get(`${this.API}/price-list/full/download`, { responseType: 'blob' });
  }
}