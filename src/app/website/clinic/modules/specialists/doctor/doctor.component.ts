import { Component } from '@angular/core';
import {
    IAvailableTime,
    IDoctorFull,
} from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { DoctorService } from '../services/doctor.service';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
    doctorData!: IDoctorFull;
    isOpenAppointment: boolean = false;

    constructor(private readonly doctorServ: DoctorService) {}

    ngOnInit(): void {
        window.scrollTo(0, 0); // Прокручивает страницу к верхней части
        this.fetchSpecialists();
    }

    fetchSpecialists() {
        this.doctorServ.getDoctor().subscribe((answer: IDoctorFull) => {
            this.doctorData = answer;
            console.log(answer);
            console.log(this.doctorData);
        });
    }

    getSlotDateKeys(slotDate: { [key: string]: string[] }): string[] {
        const keys = Object.keys(slotDate);
        return keys.slice(0, 7); // Возвращаем первые 7 элементов или меньше
    }

    getExperienceText(experience: number) {
        const lastDigit = experience % 10;
        const lastTwoDigits = experience % 100;

        if (lastDigit === 1 && lastTwoDigits !== 11) {
            return experience + ' год';
        } else if (
            lastDigit >= 2 &&
            lastDigit <= 4 &&
            (lastTwoDigits < 12 || lastTwoDigits > 14)
        ) {
            return experience + ' года';
        } else {
            return experience + ' лет';
        }
    }
}
