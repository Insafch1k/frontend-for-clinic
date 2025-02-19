import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctors.service';
import { Doctor, Education } from 'src/app/website/admin/modules/doctors/admin-doctors.interface';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  doctorId: number = 0;
  doctor: Doctor;
  photoUrl: string | null = null;
  notificationMessage: string = '';
  isSuccess: boolean = true;
  @ViewChild('fileInput') fileInput?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.doctorId = idParam ? parseInt(idParam, 10) : 0;
    });
    this.doctor = {
      id: 0,
      id_easyclinic: 0,
      name: '',
      photo: null,
      experiance: null,
      phone: null,
      educations: [],
      specialties: [],
      selected: false
    };
  }

  ngOnInit() {
    if (this.doctorId) {
      const doctor = this.doctorService.getDoctorById(this.doctorId);
      if (doctor) {
        this.doctor = { ...doctor };
        this.photoUrl = doctor.photo;
      } else {
        console.error('Врач не найден');
      }
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
    if (!this.doctor.name || !this.doctor.phone || !this.photoUrl) {
      console.error('Не все обязательные поля заполнены');
      return;
    }

    const updatedDoctor = {
      full_name: this.doctor.name,
      phone_number: this.doctor.phone,
      photo: this.photoUrl!,
      experiance: this.doctor.experiance,
      education: this.doctor.educations.map(edu => ({ name: edu.name, year: edu.year }))
    };

    this.doctorService.updateDoctor(this.doctorId, updatedDoctor).subscribe(
      data => {
        this.showNotification('Данные врача успешно обновлены', true);
        console.log('Данные врача успешно обновлены', data);
      },
      error => {
        this.showNotification('Ошибка при обновлении данных врача', false);
        console.error('Ошибка при обновлении данных врача', error);
      }
    );
  }

  private showNotification(message: string, isSuccess: boolean) {
    this.notificationMessage = message;
    this.isSuccess = isSuccess;
    // Сброс сообщения через 3 секунды
    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }
}
