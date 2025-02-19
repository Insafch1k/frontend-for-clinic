import { Component, OnInit } from '@angular/core';
import { ActionService } from '../services/stocks.service';
import { NewAction, Category } from '../stocks.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  categories: Category[] = [];
  newRecord: NewAction = {
    photo: '',
    description: '',
    category_id: 0 // Это будет идентификатор выбранной категории
  };
  imagePreview: string | null = null;

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.actionService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      error => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) { // 2 MB
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 300;
          canvas.height = 330;
          ctx?.drawImage(img, 0, 0, 300, 330);
          this.imagePreview = canvas.toDataURL('image/jpeg');
          this.newRecord.photo = this.imagePreview;
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert('Файл слишком большой. Пожалуйста, выберите изображение размером до 2 МБ.');
    }
  }

  saveRecord(): void {
    this.actionService.addAction(this.newRecord).subscribe(
      response => {
        console.log('Action added with ID:', response.id);
        // Опционально: перенаправление на список или показ сообщения об успехе
      },
      error => {
        console.error('Error adding action', error);
      }
    );
  }
}
