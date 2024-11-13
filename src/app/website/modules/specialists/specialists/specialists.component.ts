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
}
