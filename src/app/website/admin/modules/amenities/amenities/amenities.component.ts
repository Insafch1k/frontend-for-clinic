import { Component } from '@angular/core';

// Определяем интерфейс для услуг
interface Service {
  name: string;
  price: number;
  selected?: boolean; // Добавляем свойство для отслеживания выбранных услуг
}

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {
  // Массив услуг
  services: Service[] = [
    {
      name: 'Консультация педиатра',
      price: 1500,
      selected: false
    },
    {
      name: 'УЗИ',
      price: 2000,
      selected: false
    },
    {
      name: 'Анализ крови',
      price: 1200,
      selected: false
    },
    {
      name: 'Рентген',
      price: 1800,
      selected: false
    },
    // Добавьте другие услуги по аналогии
  ];

  // Метод для выбора всех услуг
  selectAll() {
    this.services.forEach(service => service.selected = true);
    this.services = [...this.services]; // Создаем новый массив для обновления состояния
  }

  // Метод для удаления выбранных услуг
  deleteSelected() {
    this.services = this.services.filter(service => !service.selected);
  }

  // Метод для переключения выделения услуги
  toggleSelection(service: Service, event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // Если кликнули на кнопку, не выделяем строку
    }
    service.selected = !service.selected;
  }
}
