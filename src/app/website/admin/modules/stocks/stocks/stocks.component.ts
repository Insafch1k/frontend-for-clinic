import { Component } from '@angular/core';

// Определяем интерфейс для прямых записей
interface DirectRecord {
  imageUrl: string;
  category: string;
  selected?: boolean; // Добавляем свойство для отслеживания выбранных записей
}

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent {
  // Массив прямых записей
  directRecords: DirectRecord[] = [
    {
      imageUrl: 'https://avatars.mds.yandex.net/i?id=5ef8223cbc7f95e3d54adba6595b1a7c_l-5231983-images-thumbs&n=13',
      category: 'скидка',
      selected: false
    },
    {
      imageUrl: 'https://gorod-zdorovja.ru/images/ginekilogymai.jpg',
      category: 'тесты',
      selected: false
    },
    {
      imageUrl: 'https://gorod-zdorovja.ru/images/our_doctors/psihoterapevty/voskresene.jpg',
      category: 'акции',
      selected: false
    },
    {
      imageUrl: 'https://p1.zoon.ru/preview/0ubzullluJyn09JhNDSzGg/1140x676x75/1/1/d/original_613eda9dd4bfc267cc30b874_6143f56b043e3.jpg',
      category: 'другое',
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

  // Метод для переключения выбора элемента
  toggleSelection(request: DirectRecord, event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.classList.contains('edit') || target.classList.contains('delete')) {
      return;
    }
    request.selected = !request.selected;
  }

  // Метод для остановки всплытия события
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
