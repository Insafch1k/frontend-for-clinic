import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctorProfileFull, IDoctor } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctorData: IDoctorProfileFull = {
    available_times: [],
    experiance: null,
    full_name: '',
    id: 0,
    id_easyclinic: 0,
    phone_number: '',
    photo: null,
    specialties: [],
    filials: [],
    reviews: [],
    education: []
  };
  isOpenAppointment: boolean = false;
  selectedDate: string | null = null;

  constructor(
    private readonly doctorServ: DoctorService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || isNaN(+id)) {
        console.error('ID врача не найден или некорректен');
        return;
    }

    this.fetchDoctorById(+id);
}

  fetchDoctorById(doctorId: number) {
    this.doctorServ.getDoctor(doctorId).subscribe(
        (answer: IDoctorProfileFull) => {
            if (!answer || Object.keys(answer).length === 0) {
                console.error('Пустой ответ от сервера');
                return;
            }
            this.doctorData = this.formatPatientNameAndPhone(answer);
        },
        (error) => {
            console.error('Ошибка при получении данных о враче:', error);
        }
    );
  }

  formatPatientNameAndPhone(doctorData: IDoctorProfileFull): IDoctorProfileFull {
    return {
      ...doctorData,
      reviews: doctorData.reviews.map(review => ({
        ...review,
        patient_name_and_phone: review.patient_name_and_phone.replace('Пациент ', 'Пациент <br>')
      }))
    };
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

  getSpecialtiesString(specialties: { id: number; name: string }[]): string {
    return specialties.map(s => s.name).join(', ') || 'Специальность не указана';
  }

  toggleTimeSlot(time: string, date: string) {
    const timeSlot = this.doctorData.available_times
      .find(at => at.date === date)?.time[time];

    if (timeSlot === 'accepts_all') {
      // Логика для обработки выбора времени
      console.log(`Выбран слот времени: ${time} на дату ${date}`);
      // Здесь можно добавить логику для изменения состояния выбранного слота
    }
  }


  selectDate(date: string) {
    this.selectedDate = date;
    // Дополнительная логика при выборе даты
  }

  getTimeSlotsForSelectedDate() {
    const selectedTime = this.doctorData.available_times.find(at => at.date === this.selectedDate);
    return selectedTime ? selectedTime.time : {};
  }

  scrollDates(direction: 'left' | 'right') {
    const dateSlots = document.querySelector('.date-slots');
    if (dateSlots) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Настройте значение прокрутки
      dateSlots.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  getDayName(date: string): string {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const dateObj = new Date(date);
    return days[dateObj.getDay()];
  }

  getMonthName(date: string): string {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const dateObj = new Date(date);
    return months[dateObj.getMonth()];
  }

  getDayNumber(date: string): string {
    const dateObj = new Date(date);
    return dateObj.getDate().toString();
  }
}