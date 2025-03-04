import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { IStock } from './stock.interface';
import { timer } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  actions: IStock[] = [];
  isLoading: boolean = true;
  showStockLoading: boolean = false;
  currentList!: IStock;
  currentIndex: number = 0;

  constructor(private readonly stockServ: StockService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // Прокручивает страницу к верхней части
    this.fetchActions();
  }

  fetchActions() {
    const loadingTimer = timer(1000).subscribe(() => {
      this.showStockLoading = true; // Если прошла 1 секунда, показываем загрузку
    });

    this.stockServ.getActions().subscribe((answer: IStock[]) => {
      loadingTimer.unsubscribe();
      this.showStockLoading = false; // Прячем компонент загрузки
      this.actions = answer; // Обновляем данные
      this.isLoading = false; // Завершаем загрузку
      if (this.actions.length > 0) {
        this.currentList = this.actions[this.currentIndex];
      }
    }, (error) => {
      console.error('Ошибка при получении данных акций', error);
      this.isLoading = false;
      this.showStockLoading = false;
    });
  }

  selectSection(index: number) {
    if (this.actions.length === 0) return;

    this.isLoading = true;
    this.showStockLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.showStockLoading = false;
      this.currentIndex = index;
      this.currentList = this.actions[index];
    }, 1000);
  }
}
