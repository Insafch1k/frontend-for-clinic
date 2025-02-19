import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../services/analuzes.service';
import { Analysis } from 'src/app/website/admin/modules/analyzes/admin-analyzes.interface';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {
  appointmentRequests: Analysis[] = [];

  constructor(private analyzesService: AnalyzesService) {}

  ngOnInit(): void {
    this.loadAnalyses();
  }

  loadAnalyses(): void {
    this.analyzesService.getAnalyses().subscribe(data => {
      this.appointmentRequests = data;
    });
  }

  deleteRequest(id: number): void {
    this.analyzesService.deleteAnalysis(id).subscribe(() => {
      this.loadAnalyses();
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
