import { Component, OnInit } from '@angular/core';
import { ActionService } from '../services/stocks.service';
import { Action } from '../stocks.interface';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  directRecords: Action[] = [];

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {
    this.loadActions();
  }

  loadActions(): void {
    this.actionService.getActions().subscribe(
      (data: Action[]) => {
        this.directRecords = data.map(action => ({ ...action, selected: false }));
      },
      error => {
        console.error('Error fetching actions', error);
      }
    );
  }

  deleteSelected(): void {
    const selectedRecords = this.directRecords.filter(record => record.selected);
    selectedRecords.forEach(record => {
      this.actionService.deleteAction(record.action_id).subscribe(
        response => {
          if (response.success) {
            this.directRecords = this.directRecords.filter(r => r.action_id !== record.action_id);
          }
        },
        error => {
          console.error('Error deleting action', error);
        }
      );
    });
  }

  toggleSelection(request: Action, event: Event): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.classList.contains('edit') || target.classList.contains('delete')) {
      return;
    }
    request.selected = !request.selected;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  selectAll(): void {
    this.directRecords.forEach(record => record.selected = true);
    this.directRecords = [...this.directRecords]; // Create a new array to update the state
  }
  deleteAction(action: Action): void {
    this.actionService.deleteAction(action.action_id).subscribe(
      response => {
        if (response.success) {
          this.directRecords = this.directRecords.filter(r => r.action_id !== action.action_id);
        }
      },
      error => {
        console.error('Error deleting action', error);
      }
    );
  }
  
}
