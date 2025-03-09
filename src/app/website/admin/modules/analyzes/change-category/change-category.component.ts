import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Analysis } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.component.html',
  styleUrls: ['./change-category.component.scss']
})
export class ChangeCategoryComponent implements OnInit {
  category: Category = { id: 0, name: '', description: '', analysis: [] };
  analyses: Analysis[] = [];
  isDropdownOpen = false;

  constructor(
    private analyzesService: AnalyzesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadCategory(id);
      } else {
        console.error('Category ID is undefined');
      }
    });

    this.loadAnalyses();
  }

  loadCategory(id: number): void {
    this.analyzesService.getCategories().subscribe(data => {
      const foundCategory = data.find(c => c.id === id);
      if (foundCategory) {
        this.category = { ...foundCategory, analysis: foundCategory.analysis || [] };
      } else {
        console.error('Category not found');
      }
    });
  }

  loadAnalyses(): void {
    this.analyzesService.getAnalyses().subscribe(data => {
      this.analyses = data;
    });
  }

  saveChanges(): void {
    if (!this.category.id) {
      console.error('Category ID is undefined');
      return;
    }

    const updatedCategory = {
      name: this.category.name,
      description: this.category.description,
      analysis: this.category.analysis || []
    };

    this.analyzesService.updateCategory(this.category.id, updatedCategory).subscribe(() => {
      this.router.navigate(['/analyzes']);
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isAnalysisSelected(analysisId: number): boolean {
    return this.category.analysis?.includes(analysisId) ?? false;
  }

  onAnalysisChange(event: any, analysisId: number): void {
    if (event.target.checked) {
      this.category.analysis?.push(analysisId);
    } else {
      this.category.analysis = this.category.analysis?.filter(id => id !== analysisId);
    }
  }

  applySelectedAnalyses(): void {
    this.isDropdownOpen = false;
  }
}
