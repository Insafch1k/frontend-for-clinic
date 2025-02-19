import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PushService {
    constructor(private readonly http: HttpClient) {}

    sendPush(numbers: number) {
        return this.http.post<{ numbers: number }>(
            `/assets/data/jsons/doctor.json`,
            numbers
        );
    }
}
