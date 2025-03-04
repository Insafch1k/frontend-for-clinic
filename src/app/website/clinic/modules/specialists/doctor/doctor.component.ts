import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctorFull } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctorData: IDoctorFull = {} as IDoctorFull;
  isOpenAppointment: boolean = false;

  constructor(
    private readonly doctorServ: DoctorService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Полученный ID врача:', id); // Проверка

    if (!id || isNaN(+id)) {
        console.error('ID врача не найден или некорректен');
        return;
    }

    this.fetchDoctorById(+id);
}
  fetchDoctorById(doctorId: number) {
    console.log(`Вызов API для врача с ID:`, doctorId);
    this.doctorServ.getDoctor(doctorId).subscribe(
        (answer: IDoctorFull) => {
            console.log('Ответ от API:', answer);
            if (!answer || Object.keys(answer).length === 0) {
                console.error('Пустой ответ от сервера');
                return;
            }
            this.doctorData = answer;
        },
        (error) => {
            console.error('Ошибка при получении данных о враче:', error);
        }
    );
  }

  getExperienceText(experience: number): string {
    const lastDigit = experience % 10;
    const lastTwoDigits = experience % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return `${experience} год`;
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastTwoDigits < 12 || lastTwoDigits > 14)
    ) {
      return `${experience} года`;
    } else {
      return `${experience} лет`;
    }
  }
}