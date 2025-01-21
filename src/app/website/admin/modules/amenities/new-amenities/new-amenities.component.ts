import { Component } from '@angular/core';

@Component({
  selector: 'app-new-amenities',
  templateUrl: './new-amenities.component.html',
  styleUrls: ['./new-amenities.component.scss']
})
export class NewAmenitiesComponent {
  specializations: string[] = ['Рентгенолог', 'Терапевт', 'Хирург', 'Кардиолог', 'Дерматолог'];
}
