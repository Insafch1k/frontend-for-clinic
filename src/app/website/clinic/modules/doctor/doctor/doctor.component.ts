import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  public rating = 4; 
  public stars: number[] = [];
  public reviews = [
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62XXXXX',
      date: '23 ноября 2023',
      time: 'в 11:31',
      name: 'История пациента',
      situation: 'отзыв пациента отзыв пациента отзыв пациента отзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациента',
      receptionDate: 'Прием был в ноябре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62YYYYY',
      date: '24 ноября 2023',
      time: 'в 12:31',
      name: 'История пациента',
      situation: 'другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента',
      receptionDate: 'Прием был в декабре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62XXXXX',
      date: '23 ноября 2023',
      time: 'в 11:31',
      name: 'История пациента',
      situation: 'отзыв пациента отзыв пациента отзыв пациента отзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациента',
      receptionDate: 'Прием был в ноябре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62YYYYY',
      date: '24 ноября 2023',
      time: 'в 12:31',
      name: 'История пациента',
      situation: 'другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента',
      receptionDate: 'Прием был в декабре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62XXXXX',
      date: '23 ноября 2023',
      time: 'в 11:31',
      name: 'История пациента',
      situation: 'отзыв пациента отзыв пациента отзыв пациента отзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациента',
      receptionDate: 'Прием был в ноябре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62YYYYY',
      date: '24 ноября 2023',
      time: 'в 12:31',
      name: 'История пациента',
      situation: 'другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента',
      receptionDate: 'Прием был в декабре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62XXXXX',
      date: '23 ноября 2023',
      time: 'в 11:31',
      name: 'История пациента',
      situation: 'отзыв пациента отзыв пациента отзыв пациента отзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациентаотзыв пациента',
      receptionDate: 'Прием был в ноябре 2024'
    },
    {
      role: 'Пациент',
      phoneNumber: '+7-919-62YYYYY',
      date: '24 ноября 2023',
      time: 'в 12:31',
      name: 'История пациента',
      situation: 'другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента другой отзыв пациента',
      receptionDate: 'Прием был в декабре 2024'
    },
    
  ];

  public displayedReviews: number = 4;

  constructor() {}

  loadMoreReviews() {
    this.displayedReviews += 4;
  }

  ngOnInit(): void {
    for (let i = 0; i < this.rating; i++) {
      this.stars.push(i);
    }
  }
} 