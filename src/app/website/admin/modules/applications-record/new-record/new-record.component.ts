import { Component } from '@angular/core';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent {
  doctors: string[] = ['Доктор Иванов', 'Доктор Петров', 'Доктор Сидоров', 'Доктор Кузнецов', 'Доктор Смирнов'];
}
