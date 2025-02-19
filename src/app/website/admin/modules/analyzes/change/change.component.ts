import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Analysis, Category } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  analysis: Analysis = { id: 0, name: '', category: '', price: 0 };
  categories: Category[] = [];

  constructor(
    private analyzesService: AnalyzesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.analyzesService.getAnalyses().subscribe(data => {
        const foundAnalysis = data.find(a => a.id === id);
        if (foundAnalysis) {
          this.analysis = foundAnalysis;
        }
      });
    });

    this.loadCategories();
  }

  loadCategories(): void {
    this.analyzesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveChanges(): void {
    const categoryId = this.categories.find(c => c.name === this.analysis.category)?.id;
    if (categoryId === undefined) {
      console.error('Category ID is undefined');
      return;
    }

    const updatedAnalysis = {
      name: this.analysis.name,
      price: this.analysis.price,
      category_id: [categoryId]
    };

    this.analyzesService.updateAnalysis(this.analysis.id, updatedAnalysis).subscribe(() => {
      this.router.navigate(['/admin/analyzes']);
    });
  }

  onCategoryChange(event: any): void {
    // Обработка изменения категории
    this.analysis.category = event.target.value;
  }
}
