// analyzes.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentRequest } from 'src/app/website/core/types/admin-analyzes.interface';
import { AnalyzesService } from '../services/analuzes.service';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {
  appointmentRequests: AppointmentRequest[] = [];

  constructor(private analyzesService: AnalyzesService) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.analyzesService.getRequests().subscribe(data => {
      this.appointmentRequests = data.map(request => ({
        ...request,
        selected: false
      }));
    });
  }

  selectAll() {
    this.appointmentRequests.forEach(request => request.selected = true);
  }

  deleteSelected() {
    this.appointmentRequests.forEach(request => {
      if (request.selected) {
        this.deleteRequest(request.analysis_id);
      }
    });
  }

  deleteRequest(analysisId: number) {
    this.analyzesService.deleteRequest(analysisId).subscribe(() => {
      this.appointmentRequests = this.appointmentRequests.filter(request => request.analysis_id !== analysisId);
    });
  }

  toggleSelection(request: AppointmentRequest, event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return; // Если кликнули на кнопку, не выделяем строку
    }
    request.selected = !request.selected;
  }
}
