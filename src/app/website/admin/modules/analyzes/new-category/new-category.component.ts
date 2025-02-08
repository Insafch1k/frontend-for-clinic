// new-category.component.ts
import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Analysis } from 'src/app/website/core/types/admin-analyzes.interface';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  analyses: Analysis[] = [];
  selectedAnalyses: number[] = [];
  isDropdownOpen: boolean = false;
  categoryName: string = '';
  categoryDescription: string = '';

  constructor(private analyzesService: AnalyzesService) {}

  ngOnInit() {
    this.loadAnalyses();
  }

  loadAnalyses() {
    this.analyzesService.getAnalyses().subscribe(
      data => {
        this.analyses = data;
      },
      error => {
        console.error('Ошибка при загрузке анализов:', error);
      }
    );
  }

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
