import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/website/core/constants/constant';
import { ICheckUp } from './analyzes.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyzesService {

  constructor(private http: HttpClient) { }

  getAnalyses(): Observable<ICheckUp[]> {
    return this.http.get<ICheckUp[]>(`${API_URL}/analysis`);
  }
}