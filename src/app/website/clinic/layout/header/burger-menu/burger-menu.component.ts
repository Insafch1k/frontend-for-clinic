import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    // // Метод для закрытия чекбокса
    closeMenu() {
        const checkbox = document.getElementById(
            'menu-icon'
        ) as HTMLInputElement;

        if (checkbox) {
            checkbox.checked = false; // Закрываем чекбокс
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50; // порог прокрутки 50 пикселей
    }

    pagesList: any = {
        '/specialists': 'Специалисты',
        '/analyzes': 'Анализы',
        '/about': 'О клинике',
        '/price-list': 'Прайс-лист',
    };

    currentRoute!: string;
    displayTitle: string = '';
    isScrolled: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.currentRoute = this.router.url;
        this.updateDisplayTitle(this.currentRoute);
        console.log(this.currentRoute);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                this.updateDisplayTitle(this.currentRoute);
                console.log(event.url);
            }
        });
    }

    // Метод для обновления заголовка в зависимости от маршрута
    private updateDisplayTitle(route: string) {
        if (route.startsWith('/stock')) {
            this.displayTitle = 'Акции';
        } else {
            this.displayTitle = this.pagesList[route] || ''; // Используем ваш объект для других заголовков
        }
    }
}
