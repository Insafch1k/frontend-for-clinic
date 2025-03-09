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
  selectedCategoryId: number | undefined;

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
          this.selectedCategoryId = this.categories.find(c => c.name === foundAnalysis.category)?.id;
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
    if (this.selectedCategoryId === undefined) {
      console.error('Category ID is undefined');
      return;
    }

    const updatedAnalysis = {
      name: this.analysis.name,
      price: this.analysis.price,
      category_id: [this.selectedCategoryId]
    };

    this.analyzesService.updateAnalysis(this.analysis.id, updatedAnalysis).subscribe(() => {
      this.router.navigate(['/admin/analyzes']);
    });
  }

  onCategoryChange(event: any): void {
    this.selectedCategoryId = event.target.value;
  }
}

