import { Component } from '@angular/core';

interface AppointmentRequest {
  patientName: string;
  doctorName: string;
  phoneNumber: string;
  dateOfBirth: string;
  selected?: boolean; // Добавляем свойство для отслеживания выбранных заявок
}

@Component({
  selector: 'app-applications-record',
  templateUrl: './applications-record.component.html',
  styleUrls: ['./applications-record.component.scss']
})
export class ApplicationsRecordComponent {
  // Массив заявок на запись
  appointmentRequests: AppointmentRequest[] = [
    {
      patientName: 'Иванов Иван',
      doctorName: 'Петров Петр',
      phoneNumber: '+7 (777) 777 77 77',
      dateOfBirth: '14.07.2024',
      selected: false
    },
    {
      patientName: 'Смирнова Анна',
      doctorName: 'Сидоров Алексей',
      phoneNumber: '+7 (777) 777 77 77',
      dateOfBirth: '14.07.2024',
      selected: false
    },
  ];

  // Метод для выбора всех заявок
  selectAll() {
    this.appointmentRequests.forEach(request => request.selected = true);
  }

  // Метод для удаления выбранных заявок
  deleteSelected() {
    this.appointmentRequests = this.appointmentRequests.filter(request => !request.selected);
  }

  // Метод для переключения выделения заявки
  toggleSelection(request: AppointmentRequest, event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // Если кликнули на кнопку, не выделяем строку
    }
    request.selected = !request.selected;
  }
}
