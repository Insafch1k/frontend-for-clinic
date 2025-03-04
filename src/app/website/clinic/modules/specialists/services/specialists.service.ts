import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class SpecialistsService {
    constructor(private readonly http: HttpClient) {}

    getSpecialists(categoryId: string): Observable<IDoctor[]> {
        const url = categoryId === 'all' ? `${API_URL}/doctors` : `${API_URL}/doctors?specialty_id=${categoryId}`;
        return this.http.get<IDoctor[]>(url);
    }
    

    getCategories(): Observable<{ id: number; name: string }[]> {
        return this.http.get<{ id: number; name: string }[]>(`${API_URL}/specialties`);
    }

    private handleError(err: HttpErrorResponse): void {
        console.error('Ошибка при получении данных', err.error.message);
    }
}
