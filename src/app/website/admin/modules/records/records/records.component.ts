import { Component } from '@angular/core';

// Определяем интерфейс для прямых записей
interface DirectRecord {
  patientName: string;
  doctorName: string;
  phoneNumber: string;
  dateOfBirth: string;
  selected?: boolean; // Добавляем свойство для отслеживания выбранных записей
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {
  // Массив прямых записей
  directRecords: DirectRecord[] = [
    {
      patientName: 'Петров Петр',
      doctorName: 'Иванов Иван',
      phoneNumber: '+7 (777) 777 77 77',
      dateOfBirth: '14.07.2024',
      selected: false
    },
    {
      patientName: 'Сидоров Алексей',
      doctorName: 'Смирнова Анна',
      phoneNumber: '+7 (777) 777 77 77',
      dateOfBirth: '14.07.2024',
      selected: false
    },
  ];

  // Метод для выбора всех записей
  selectAll() {
    this.directRecords.forEach(record => record.selected = true);
    this.directRecords = [...this.directRecords]; // Создаем новый массив для обновления состояния
  }

  // Метод для удаления выбранных записей
  deleteSelected() {
    this.directRecords = this.directRecords.filter(record => !record.selected);
  }
}
