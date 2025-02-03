import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-photo-collage',
    templateUrl: './photo-collage.component.html',
    styleUrls: ['./photo-collage.component.scss'],
})
export class PhotoCollageComponent {
    isMobile: boolean = false;
    // При инициализации компонента определяем начальное состояние isMobile
    constructor() {
        this.updateIsMobile(window.innerWidth);
    }

    // Метод для обновления состояния isMobile
    private updateIsMobile(width: number): void {
        this.isMobile = width > 768;
    }

    // Слушаем событие изменения размера окна
    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        const width = (event.target as Window).innerWidth;
        this.updateIsMobile(width);
    }
}
