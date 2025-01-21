import { Component } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
  doctors = [
    { id: 1, name: 'Васильева Елизавета Ильинична ' },
    { id: 2, name: 'Тихомирова Елизавета Тимуровна ' },
    { id: 3, name: 'Кудряшова Василиса Данииловна' }
  ];

  analyses = [
    { id: 1, name: 'ГАСТРО ЧЕК-АП +1'},
    { id: 2, name: 'ЧЕК-АП "ИЗБЫТОЧНЫЙ ВЕС"' },
    { id: 3, name: 'ЧЕК-АП №1РЕСПИРАТОРНЫЕ АЛЛЕРГЕНЫ' }
  ];

  selectedDoctor: string = '';
  selectedAnalysis: string = '';

  onDoctorChange(event: any) {
    this.selectedDoctor = event.target.value;
  }

  onAnalysisChange(event: any) {
    this.selectedAnalysis = event.target.value;
  }
}
