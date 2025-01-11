import { Component } from '@angular/core';

interface Specialist {
  fullName: string;
  rating: number;
  numberOfReviews: number;
  position: string;
  experience: string;
  review: string;
}

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent {
  doctorCategories: string[] = ['Терапевт', 'Хирург', 'Кардиолог', 'Педиатр'];
  experiences: string[] = ['0-3 года', '3-5 лет', '5-10 лет', '10+ лет'];

  selectedDoctorCategory: string;
  selectedExperience: string;
  homeVisitChecked: boolean = false;

  specialists: Specialist[] = [
    {
      fullName: 'Иванов Иван Иванович',
      rating: 4.5,
      numberOfReviews: 120,
      position: 'Терапевт',
      experience: '5-10 лет',
      review: 'текст с одним отзывом текст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывом'
    },
    {
      fullName: 'Петров Петр Петрович',
      rating: 5,
      numberOfReviews: 200,
      position: 'Хирург',
      experience: '10+ лет',
      review: 'текст с одним отзывом текст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывом'
    },
    {
      fullName: 'Сидоров Сидор Сидорович',
      rating: 3.7,
      numberOfReviews: 50,
      position: 'Кардиолог',
      experience: '3-5 лет',
      review: 'текст с одним отзывом текст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывомтекст с одним отзывом'
    }
  ];

  startDate: Date = new Date();
    // Массивы для дат и временных слотов
    dates: string[] = this.generateDates(7, this.startDate);
    selectedDate: string = this.dates[0];
    selectedTime: string = '';
    timeSlots: { [key: string]: string[] } = {
      '2025-01-10': ['17:00', '17:40', '18:20', '19:00'],
      '2025-01-11': ['09:00', '09:40', '10:20', '11:00'],
    };

  constructor() {
    //по умолчанию
    this.selectedDoctorCategory = '';
    this.selectedExperience = '';
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return Array(fullStars).fill('full').concat(hasHalfStar ? ['half'] : []).concat(Array(emptyStars).fill('empty'));
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

  addDates(): void {
    const newStartDate = new Date(this.dates[this.dates.length - 1]);
    newStartDate.setDate(newStartDate.getDate() + 1);
    this.dates = this.generateDates(7, newStartDate);
    this.selectedDate = this.dates[3];
  }
  
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
