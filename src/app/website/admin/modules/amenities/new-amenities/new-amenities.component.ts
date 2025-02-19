import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmenitiesService } from '../services/amenities.service';
import { Speciality } from '../amenities.interface';

@Component({
  selector: 'app-new-amenities',
  templateUrl: './new-amenities.component.html',
  styleUrls: ['./new-amenities.component.scss']
})
export class NewAmenitiesComponent implements OnInit {
  specializations: Speciality[] = [];
  newService = {
    service_name: '',
    price: 0,
    speciality_id: 0
  };

  constructor(
    private router: Router,
    private amenitiesService: AmenitiesService
  ) {}

  ngOnInit(): void {
    this.loadSpecializations();
  }

  loadSpecializations(): void {
    this.amenitiesService.getSpecialities().subscribe(data => {
      this.specializations = data;
    });
  }

  addService(): void {
    this.amenitiesService.addService(this.newService).subscribe(response => {
      if (response.success) {
        // Очистка полей после успешного добавления
        this.newService = {
          service_name: '',
          price: 0,
          speciality_id: 0
        };
        // Показать уведомление об успешном добавлении
        // Например, можно использовать сервис уведомлений или просто вывести alert
        alert('Услуга успешно добавлена!');
      } else {
        // Обработка ошибки, если необходимо
        alert('Ошибка при добавлении услуги.');
      }
    });
  }
}
