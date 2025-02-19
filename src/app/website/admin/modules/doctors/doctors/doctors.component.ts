import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctors.service';
import { Doctor } from 'src/app/website/admin/modules/doctors/admin-doctors.interface';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data.map(doctor => ({ ...doctor, selected: false }));
      this.doctorService.setDoctors(this.doctors);
      console.log('Doctors data:', this.doctors); // Добавляем консольный лог
    });
  }

  // Метод для выбора всех врачей
  selectAll() {
    this.doctors.forEach(doctor => doctor.selected = true);
    this.doctors = [...this.doctors]; // Создаем новый массив для обновления состояния
  }

  // Метод для удаления выбранных врачей
  deleteSelected() {
    this.doctors = this.doctors.filter(doctor => !doctor.selected);
  }

  // Метод для переключения выделения врача
  toggleSelection(doctor: Doctor, event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // Если кликнули на кнопку, не выделяем строку
    }
    doctor.selected = !doctor.selected;
  }
}
