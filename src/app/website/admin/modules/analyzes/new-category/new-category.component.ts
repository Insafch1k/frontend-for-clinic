import { Component } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent {
  doctors = [
    { id: 1, name: 'Васильева Елизавета Ильинична ' },
    { id: 2, name: 'Тихомирова Елизавета Тимуровна ' },
    { id: 3, name: 'Кудряшова Василиса Данииловна' }
  ];

  analyses = [
    { id: 1, name: 'Инсулин' },
    { id: 2, name: 'АЛТ' },
    { id: 3, name: 'Глюкоза' },
    { id: 4, name: 'АСТ' },
    { id: 5, name: 'ГГТ' },
    { id: 6, name: 'Холестерин' },
    { id: 7, name: 'Забор' },
  ];

  selectedDoctor: string = '';
  selectedAnalyses: string[] = [];
  isDropdownOpen: boolean = false;

  onDoctorChange(event: any) {
    this.selectedDoctor = event.target.value;
  }

  onAnalysisChange(event: any, analysisName: string) {
    if (event.target.checked) {
      this.selectedAnalyses.push(analysisName);
    } else {
      this.selectedAnalyses = this.selectedAnalyses.filter(analysis => analysis !== analysisName);
    }
    console.log(this.selectedAnalyses); // Проверка выбранных анализов
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
