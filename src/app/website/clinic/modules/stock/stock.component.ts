import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { IStock } from './stock.interface';
import { timer } from 'rxjs';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
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
        // Запускаем таймер на 1 секунду
        const loadingTimer = timer(1000).subscribe(() => {
            this.showStockLoading = true; // Если прошла 1 секунда, показываем загрузку
        });

        this.stockServ.getActions().subscribe((answer: IStock[]) => {
            // Отменяем таймер, если ответ пришел раньше
            loadingTimer.unsubscribe();
            this.showStockLoading = false; // Прячем компонент загрузки
            this.actions = answer; // Обновляем данные
            this.isLoading = false; // Завершаем загрузку
        });
    }

    selectSection(index: number) {
        const loadingTimer1 = timer(300).subscribe(() => {
            this.isLoading = true; // Если прошла 0.3 секунда, показываем загрузку
        });
        loadingTimer1.unsubscribe();
        const loadingTimer2 = timer(1000).subscribe(() => {
            this.showStockLoading = true; // Если прошла 1 секунда, показываем загрузку
        });
        loadingTimer2.unsubscribe();

        this.currentIndex = index;
        this.currentList = this.actions[index];
    }
}
