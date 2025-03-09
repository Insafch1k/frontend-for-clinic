import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDoctorProfileFull } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { DoctorService } from '../services/doctor.service';

interface IService {
  id: number;
  name: string;
  price: number;
}

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
  isConfirmationSuccessful: boolean = false;
  selectedDate: string | null = null;
  selectedServicePrice: number = 0;
  services: IService[] = [];
  appointmentForm: FormGroup;
  isSend: boolean = false;
  confirmationCode: string = '';
  inputValue: string = '';

  constructor(
    private readonly doctorServ: DoctorService,
    private readonly route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.appointmentForm = this.fb.group({
      serviceName: ['', Validators.required],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      consent: [false, Validators.requiredTrue]
    });
  }

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

        // Загружаем услуги на основе первой специальности врача
        const specialtyId = this.doctorData.specialties[0]?.id;
        if (specialtyId) {
          this.fetchServices(specialtyId);
        }
      },
      (error) => {
        console.error('Ошибка при получении данных о враче:', error);
      }
    );
  }

  fetchServices(specialtyId: number): void {
    this.doctorServ.getServices(specialtyId).subscribe({
      next: (response) => {
        if (response.length > 0 && response[0].services.length > 0) {
          this.services = response[0].services; // Заполняем список услуг
          this.selectedServicePrice = +response[0].services[0].price; // Берем цену первой услуги
        }
      },
      error: (error) => {
        console.error('Ошибка загрузки услуг:', error);
      }
    });
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
      console.log(`Выбран слот времени: ${time} на дату ${date}`);
    }
  }

  selectDate(date: string, time?: string) {
    this.selectedDate = time ? `${date} ${time}` : date;
  }

  getTimeSlotsForSelectedDate() {
    const selectedTime = this.doctorData.available_times.find(at => at.date === this.selectedDate);
    return selectedTime ? selectedTime.time : {};
  }

  scrollDates(direction: 'left' | 'right') {
    const dateSlots = document.querySelector('.date-slots');
    if (dateSlots) {
      const scrollAmount = direction === 'left' ? -300 : 300;
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

  onServiceChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const serviceId = selectElement.value;
    const selectedService = this.services.find(service => service.id === Number(serviceId));
    if (selectedService) {
        this.selectedServicePrice = selectedService.price;
    }
  }

  openPopup(time: string, date: string) {
    if (this.selectedDate) {
      this.isOpenAppointment = true;
      this.selectedDate = `${date} ${time}`;
      console.log(`Открыт попап для слота времени: ${time} на дату ${date}`);
    }
    console.log('selectedDate:', this.selectedDate);
  }

  closePopup(){
    this.isOpenAppointment = false;
  }

  getServicesList(): string {
    return this.services.map(service =>
      `<p>${service.name} - ${service.price} руб</p>`
    ).join('');
  }

  formatPhoneNumber(phoneNumber: string): string {
    // Удаляем все нецифровые символы
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Проверяем, что номер имеет правильную длину (11 символов для российского номера без '+')
    if (cleaned.length === 11) {
      const countryCode = '+7';
      const areaCode = cleaned.substring(1, 4);
      const firstPart = cleaned.substring(4, 7);
      const secondPart = cleaned.substring(7, 9);
      const thirdPart = cleaned.substring(9, 11);

      return `${countryCode} (${areaCode})-${firstPart}-${secondPart}-${thirdPart}`;
    }

    // Если номер не соответствует ожидаемому формату, возвращаем его без изменений
    return phoneNumber;
  }

  onSubmit() {
    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();
      return;
    }

    const selectedDateInfo = this.doctorData.available_times.find(at => at.date === this.selectedDate?.split(' ')[0]);

    if (!selectedDateInfo) {
      console.error('Не удалось найти информацию о выбранной дате.');
      return;
    }

    const appointmentData = {
      fio: `${this.appointmentForm.value.surname} ${this.appointmentForm.value.name}`,
      mobile: this.appointmentForm.value.phone,
      day_id: selectedDateInfo.day_id.toString(), // Преобразуем day_id в строку
      time: this.selectedDate?.split(' ')[1],
    };

    this.doctorServ.createAppointment(appointmentData).subscribe(
      (response) => {
        console.log('Запись успешно создана:', response);
        this.isSend = true;
      },
      (error) => {
        console.error('Ошибка при создании записи:', error);
      }
    );
  }

  confirmAppointment() {
    if (!this.confirmationCode) {
      console.error('Код подтверждения не заполнен.');
      return;
    }

    const confirmationData = {
      code: this.confirmationCode,
      mobile: this.appointmentForm.value.phone,
    };

    this.doctorServ.confirmAppointment(confirmationData.code, confirmationData.mobile).subscribe(
      (response) => {
        console.log('Запись успешно подтверждена:', response);
        this.isConfirmationSuccessful = true; // Устанавливаем флаг в true при успешном подтверждении
      },
      (error) => {
        console.error('Ошибка при подтверждении записи:', error);
        this.isConfirmationSuccessful = false; // Сбрасываем флаг в случае ошибки
      }
    );
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    this.confirmationCode = inputElement.value;
  }
}
