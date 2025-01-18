import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  // Массивы для выбора
  specializations = ['Терапевт', 'Кардиолог', 'Офтальмолог'];
  doctors: { [key: string]: string[] } = {
    'Терапевт': ['Иванов Иван Иванович', 'Петров Петр Петрович'],
    'Кардиолог': ['Сидоров Сидор Сидорович'],
    'Офтальмолог': ['Кузнецов Кузьма Кузьмич']
  };
  appointmentTypes = ['Первичный', 'Вторичный'];
  services = ['Консультация', 'Осмотр', 'Лечение'];

  // Переменные для хранения выбранных значений
  selectedSpecialization: string = '';
  selectedDoctor: string = '';
  selectedAppointmentType: string = '';
  selectedService: string = '';
  surname: string = '';
  name: string = '';
  phoneNumber: string = '+7';
  agreement: boolean = false;

  // Стартовая дата
  startDate: Date = new Date(2024, 11, 9); // 9 декабря 2024

  // Массивы для дат и временных слотов
  dates: string[] = this.generateDates(7, this.startDate);
  selectedDate: string = this.dates[0];
  selectedTime: string = '';
  timeSlots: { [key: string]: string[] } = {
    '2024-12-09': ['17:00', '17:40', '18:20', '19:00'],
    '2024-12-10': ['09:00', '09:40', '10:20', '11:00'],
  };

  // Метод для отправки данных
  submitForm() {
    console.log('Кнопка нажата');
    if (this.agreement) {
      console.log('Форма отправлена:', {
        specialization: this.selectedSpecialization,
        doctor: this.selectedDoctor,
        appointmentType: this.selectedAppointmentType,
        service: this.selectedService,
        surname: this.surname,
        name: this.name,
        phoneNumber: this.phoneNumber,
        date: this.selectedDate,
        timeSlot: this.selectedTime
      });
    } else {
      alert('Пожалуйста, дайте согласие на обработку персональных данных.');
    }
  }

  // Метод для генерации дат
  generateDates(count: number, startDate: Date): string[] {
    const dates: string[] = [];
    for (let i = 0; i < count; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  }

  // Метод для получения дня недели и месяца
  getDayOfWeekAndMonth(date: string): string {
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const dayIndex = new Date(date).getDay();
    const monthIndex = new Date(date).getMonth();
    return `${daysOfWeek[dayIndex]}, ${months[monthIndex]}`;
  }

  // Метод для добавления новых дней
  addDates(): void {
    const newStartDate = new Date(this.dates[this.dates.length - 1]);
    newStartDate.setDate(newStartDate.getDate() + 1);
    this.dates = this.generateDates(7, newStartDate);
    this.selectedDate = this.dates[3];
  }

  // Метод для удаления старых дней
  removeDates(): void {
    const newStartDate = new Date(this.dates[0]);
    newStartDate.setDate(newStartDate.getDate() - 1);
    if (newStartDate.getTime() >= this.startDate.getTime()) {
      this.dates = this.generateDates(7, newStartDate);
      this.selectedDate = this.dates[3];
    }
  }

  // Метод для выбора временного слота
  selectTimeSlot(time: string): void {
    this.selectedTime = time;
    console.log('Выбран временной слот:', time);
  }
}
