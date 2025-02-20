import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
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
}
