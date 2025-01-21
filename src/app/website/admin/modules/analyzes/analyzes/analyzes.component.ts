import { Component } from '@angular/core';

interface AppointmentRequest {
  analysis: string;
  category: string;
  doctorName: string;
  selected?: boolean; // Добавляем свойство для отслеживания выбранных заявок
}

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent {
  // Массив заявок на запись
  appointmentRequests: AppointmentRequest[] = [
    {
      analysis: 'Анализ крови',
      category: 'Гематология',
      doctorName: 'Петров Петр',
      selected: false
    },
    {
      analysis: 'Анализ мочи',
      category: 'Урология',
      doctorName: 'Сидоров Алексей',
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
