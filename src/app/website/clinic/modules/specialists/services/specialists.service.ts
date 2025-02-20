import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { ISpecialists } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { API_URL } from 'src/app/website/core/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class SpecialistsService {
    specialists!: ISpecialists;

    constructor(private readonly http: HttpClient) {}

    getSpecialists() {
        // return this.http.get<ISpecialists>(
        //     `/assets/data/jsons/specialists.json`
        // );
        return this.http.get<ISpecialists>(`${API_URL}/doctors `);
    }

    // removeObject(
    //     deleteList: IGeoJSONGroup<IGeoJsonDeleteObject>
    // ): Observable<any> {
    //     return this.http.request('DELETE', `${API_URL}/map/delete_object`, {
    //         body: { data: deleteList }, // Отправляем deleteList в теле запроса
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // }

    // updateObject(updateList: IGeoJSONGroup<IGeoJsonData>): Observable<any> {
    //     return this.http.put(`${API_URL}/map/update_object`, {
    //         data: updateList,
    //     });
    // }

    // createObject(
    //     createList: IGeoJSONGroup<IGeoJsonNewObject>
    // ): Observable<any> {
    //     return this.http.post(`${API_URL}/map/create_object`, {
    //         data: createList,
    //     });
    // }
    private handeError(err: HttpErrorResponse): void {
        console.error('Данные не отправились', err.error.message);
    }
}
