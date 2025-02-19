import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Router } from '@angular/router';
import { Analysis } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  analyses: Analysis[] = [];
  isDropdownOpen = false;
  newCategory = {
    name: '',
    description: '',
    analysis: [] as number[]
  };
  selectedAnalyses: { [key: number]: boolean } = {};

  constructor(
    private analyzesService: AnalyzesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAnalyses();
  }

  loadAnalyses(): void {
    this.analyzesService.getAnalyses().subscribe(data => {
      this.analyses = data;
    });
  }

  addCategory(): void {
    this.newCategory.analysis = Object.entries(this.selectedAnalyses)
      .filter(([key, value]) => value)
      .map(([key]) => Number(key));

    this.analyzesService.addCategory(this.newCategory).subscribe(() => {
      this.router.navigate(['/admin/analyzes']);
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onAnalysisChange(event: any, analysisId: number): void {
    this.selectedAnalyses[analysisId] = event.target.checked;
  }

  applySelectedAnalyses(): void {
    this.isDropdownOpen = false;
  }
}
