import { Component } from '@angular/core';

interface NewRecord {
  category: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  categories: string[] = ['скидка', 'тесты', 'акции', 'другое'];
  newRecord: NewRecord = {
    category: ''
  };
  imagePreview: string | null = null;

  onFileSelected(event: any) {
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
          canvas.height = 169;
          ctx?.drawImage(img, 0, 0, 300, 169);
          this.imagePreview = canvas.toDataURL('image/jpeg');
          this.newRecord.imageUrl = this.imagePreview;
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert('Файл слишком большой. Пожалуйста, выберите изображение размером до 2 МБ.');
    }
  }

  saveRecord() {
    // Логика сохранения записи
    console.log(this.newRecord);
  }
}
