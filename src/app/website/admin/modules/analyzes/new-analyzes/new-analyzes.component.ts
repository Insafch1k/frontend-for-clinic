import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-new-analyzes',
  templateUrl: './new-analyzes.component.html',
  styleUrls: ['./new-analyzes.component.scss']
})
export class NewAnalyzesComponent implements OnInit {
  categories: Category[] = [];
  doctors: any[] = []; // Предполагается, что у вас есть список врачей
  newAnalysis = {
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
    this.loadDoctors();
  }

  loadCategories(): void {
    this.analyzesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadDoctors(): void {
    // Загрузите список врачей
  }

  addAnalysis(): void {
    this.analyzesService.addAnalysis(this.newAnalysis).subscribe(() => {
      this.router.navigate(['/analyzes']);
    });
  }


  onCategoryChange(event: any): void {
    // Обработка изменения категории
  }
}
