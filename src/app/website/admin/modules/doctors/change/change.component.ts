import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctors.service';
import { Doctor, Education } from 'src/app/website/core/types/admin-doctors.interface';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  doctorId: number = 0; // Инициализируем значением по умолчанию
  doctor: Doctor;
  photoUrl: string | null = null;
  @ViewChild('fileInput') fileInput?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.doctorId = idParam ? parseInt(idParam, 10) : 0;
      if (isNaN(this.doctorId)) {
        console.error('Invalid doctor ID');
        this.doctorId = 0; // Установите значение по умолчанию или обработайте ошибку
      }
    });
    this.doctor = {
      id: 0,
      id_easyclinic: 0,
      name: '', // Используем name для ФИО
      photo: null,
      experiance: null,
      phone_number: null,
      educations: [],
      specialties: [],
      selected: false
    };
  }

  ngOnInit() {
    if (!isNaN(this.doctorId)) {
      const doctor = this.doctorService.getDoctorById(this.doctorId);
      if (doctor) {
        this.doctor = doctor;
        this.photoUrl = doctor.photo;
        console.log('Doctor data:', this.doctor); // Добавляем консольный лог
      } else {
        console.error('Doctor not found');
      }
    } else {
      console.error('Invalid doctor ID');
    }
  }

  triggerFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addEducation(education: string, year: string) {
    if (education && year) {
      this.doctor.educations.push({ name: education, year: parseInt(year, 10) });
    }
  }

  removeEducation(index: number) {
    this.doctor.educations.splice(index, 1);
  }

  saveChanges() {
    const updatedDoctor: Doctor = {
      ...this.doctor,
      photo: this.photoUrl!,
    };
    console.log('Updated doctor data:', updatedDoctor); // Добавляем консольный лог
    this.doctorService.updateDoctor(this.doctorId, updatedDoctor).subscribe(
      data => {
        console.log('Doctor updated successfully', data);
      },
      error => {
        console.error('Error updating doctor', error);
      }
    );
  }
}
