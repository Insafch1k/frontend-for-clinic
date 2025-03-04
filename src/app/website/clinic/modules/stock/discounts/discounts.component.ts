import { Component, Input } from '@angular/core';
import { IStock } from '../stock.interface';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss'],
})
export class DiscountsComponent {
  @Input() actionList!: IStock;
}
