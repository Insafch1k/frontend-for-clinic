import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    pagesList: any = {
        '/specialists': 'Специалисты',
        '/analyzes': 'Анализы',
        '/about': 'О клинике',
        '/stock': 'Акции',
        '/price-list': 'Прайс-лист',
    };
    currentRoute!: string;
    isScrolled: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url; // Получаем текущий маршрут
            }
        });
    }
    // Метод для закрытия чекбокса
    closeMenu() {
        console.log(this.currentRoute)
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

    lala() {
        console.log(this.currentRoute);
    }
}
