import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    email: string = 'clinica03@yandex.ru';

    constructor(private router: Router) {}

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

    openMainRoute() {
        this.router.navigate(['/main']).then(() => {
            // Убедитесь, что прокрутка вернется в верхнюю часть страницы после перехода
            window.scrollTo(0, 0);
        });
    }

    goToVk(): void {
        window.open('https://vk.com/clinika03', '_blank');
      }
    
      goToWhatsApp(): void {
        const phoneNumber = '+79625790503';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
      }
    
      goToInstagram(): void {
        window.open('https://www.instagram.com/clinika03?igsh=MWpuN252cGkyZ2trdg==', '_blank');
      }
}
