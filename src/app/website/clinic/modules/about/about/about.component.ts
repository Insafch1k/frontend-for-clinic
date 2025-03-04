import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    constructor(private router: Router) {}
    
    lookMore: boolean = false;

    LookOrNo() {
        this.lookMore = !this.lookMore;
    }

    ngOnInit() {
        window.scrollTo(0, 0); // Прокручивает страницу к верхней части
    }

    goToYandex() {
        const link =
            'https://yandex.ru/profile/121430615397?no-distribution=1&view-state=mini&source=wizbiz_new_map_single';
        const confirmation = confirm(
            'Вы хотите перейти в Яндекс.Карты для просмотра информации об объекте?'
        );
        if (confirmation) {
            window.open(link, '_blank'); // Открытие ссылки в новой вкладке
        }
    }

    navigateToMain(): void {
        // Навигация к main компоненту
        this.router.navigate(['/main']).then(() => {
          // Прокрутка до элемента с id="req-record" после навигации
          const element = document.getElementById('req-record');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        });
    }
}
