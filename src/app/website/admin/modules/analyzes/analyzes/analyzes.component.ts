import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Analysis, Category } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {
  appointmentRequests: Analysis[] = [];
  categories: Category[] = [];

  constructor(private analyzesService: AnalyzesService) {}

  ngOnInit(): void {
    this.loadAnalyses();
    this.loadCategories();
  }

  loadAnalyses(): void {
    this.analyzesService.getAnalyses().subscribe(data => {
      this.appointmentRequests = data;
    });
  }

  loadCategories(): void {
    this.analyzesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  deleteRequest(id: number): void {
    this.analyzesService.deleteAnalysis(id).subscribe(() => {
      this.loadAnalyses();
    });
  }

  deleteCategory(id: number): void {
    this.analyzesService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
    });
  }

  deleteSelected(): void {
    const selectedIds = this.appointmentRequests
      .filter(request => request.selected)
      .map(request => request.id);

    selectedIds.forEach(id => {
      this.deleteRequest(id);
    });
  }

  selectAll(): void {
    this.appointmentRequests.forEach(request => {
      request.selected = true;
    });
  }

  toggleSelection(request: Analysis, event: Event): void {
    event.stopPropagation();
    request.selected = !request.selected;
  }
}
