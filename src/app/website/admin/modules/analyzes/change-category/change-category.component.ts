import { Component } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';

@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.component.html',
  styleUrls: ['./change-category.component.scss']
})
export class ChangeCategoryComponent  {
  analyses = [
    { id: 1, name: 'Инсулин' },
    { id: 2, name: 'АЛТ' },
    { id: 3, name: 'Глюкоза' },
    { id: 4, name: 'АСТ' },
    { id: 5, name: 'ГГТ' },
    { id: 6, name: 'Холестерин' },
    { id: 7, name: 'Забор' },
    { id: 8, name: 'АСТ' },
    { id: 9, name: 'ГГТ' },
    { id: 10, name: 'Холестерин' },
    { id:11, name: 'Забор' },
  ];

  selectedAnalyses: number[] = [];
  isDropdownOpen: boolean = false;
  categoryName: string = '';
  categoryDescription: string = '';

  constructor(private analyzesService: AnalyzesService) {}

  onAnalysisChange(event: any, analysisId: number) {
    if (event.target.checked) {
      this.selectedAnalyses.push(analysisId);
    } else {
      this.selectedAnalyses = this.selectedAnalyses.filter(id => id !== analysisId);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applySelectedAnalyses() {
    this.isDropdownOpen = false;
  }

  addCategory() {
    const newCategory = {
      name: this.categoryName,
      description: this.categoryDescription,
      analysis: this.selectedAnalyses
    };

    this.analyzesService.addCategory(newCategory).subscribe(
      response => {
        if (response.success) {
          console.log('Категория успешно добавлена:', response);
          // Очистка полей после успешного добавления
          this.categoryName = '';
          this.categoryDescription = '';
          this.selectedAnalyses = [];
          alert('Категория успешно добавлена!');
        } else {
          console.error('Ошибка при добавлении категории:', response);
        }
      },
      error => {
        console.error('Ошибка при добавлении категории:', error);
      }
    );
  }
}
