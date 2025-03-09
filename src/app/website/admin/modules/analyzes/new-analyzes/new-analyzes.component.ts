import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Router } from '@angular/router';
import { Category, NewAnalysis } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-new-analyzes',
  templateUrl: './new-analyzes.component.html',
  styleUrls: ['./new-analyzes.component.scss']
})
export class NewAnalyzesComponent implements OnInit {
  categories: Category[] = [];
  newAnalysis: NewAnalysis = {
    name: '',
    price: 0,
    category_id: []
  };

  constructor(
    private analyzesService: AnalyzesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.analyzesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addAnalysis(): void {
    if (this.newAnalysis.category_id.length === 0) {
      alert('Пожалуйста, выберите категорию.');
      return;
    }

    console.log('Отправляемые данные:', this.newAnalysis);
    this.analyzesService.addAnalysis(this.newAnalysis).subscribe(
      response => {
        console.log('Анализ успешно добавлен:', response);
        this.router.navigate(['/admin/analyzes']);
      },
      error => {
        console.error('Ошибка при добавлении анализа:', error);
      }
    );
  }

  onCategoryChange(event: any): void {
    const selectedCategoryId = event.target.value;
    this.newAnalysis.category_id = [selectedCategoryId];
  }
}
