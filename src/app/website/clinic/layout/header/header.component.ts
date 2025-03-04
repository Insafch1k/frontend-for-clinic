import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled: boolean = false;
  public isMobileView: boolean = false;

  constructor() {
    this.checkWindowSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize(event.target.innerWidth);
  }

  checkWindowSize(width: number) {
    this.isMobileView = width <= 768; // Здесь вы можете изменить ширину по вашему усмотрению
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // порог прокрутки 50 пикселей
  }
  goToVk(): void {
    window.location.href = 'https://vk.com/clinika03';
  }
}
