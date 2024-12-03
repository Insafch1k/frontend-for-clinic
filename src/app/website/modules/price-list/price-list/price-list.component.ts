import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { PriceListService } from '../services/price-list.service'; // Обновленный путь к сервису

interface Service {
  name: string;
  price: number;
}

interface Services {
  [key: string]: Service[];
}

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit, OnDestroy, AfterViewInit {
  specialists = [
    'Педиатр',
    'Невролог',
    'Гастроэнтеролог',
    'Детский аллерголог-иммунолог',
    'Детский нефролог',
    'Эндокринолог',
    'Детский кардиолог',
    'Психолог-психотерапевт',
    'Неонатолог',
    'Логопед-дефектолог, нейропсихолог',
    'Процедуры'
  ];

  selectedSpecialist: string | null = null;
  isMobile: boolean = false;

  services: Services = {
    'Педиатр': [
      { name: 'Консультация', price: 1500 },
      { name: 'Прививка', price: 500 },
      { name: 'Обследование на аллергии', price: 1200 },
      { name: 'Скрининг на нарушения развития', price: 1800 },
      { name: 'Вакцинация от гриппа', price: 700 },
    ],
    'Невролог': [
      { name: 'Консультация', price: 2000 },
      { name: 'Электроэнцефалография', price: 1000 },
      { name: 'МРТ головного мозга', price: 3000 },
      { name: 'КТ головного мозга', price: 2500 },
      { name: 'Комплексное обследование', price: 6000 },
      { name: 'Невропсихологическое обследование', price: 1800 },
      { name: 'Консультация по лечению головных болей', price: 1200 },
      { name: 'УЗИ сосудов головы', price: 1500 },
      { name: 'Лечение и терапия (курс)', price: 5000 },
      { name: 'Мониторинг состояния пациента', price: 4000 }
    ],
    // Добавьте остальные специалисты и их услуги
  };

  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

  constructor(private priceListService: PriceListService) {}

  ngOnInit(): void {
    this.selectedSpecialist = this.specialists[0];
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngAfterViewInit(): void {
    this.serviceItems.forEach(item => {
      const serviceName = item.nativeElement.querySelector('.service-name');
      const servicePrice = item.nativeElement.querySelector('.service-price');
      const serviceDivider = item.nativeElement.querySelector('.service-divider');

      if (serviceName && servicePrice && serviceDivider) {
        const nameWidth = serviceName.offsetWidth;
        const priceWidth = servicePrice.offsetWidth;
        const dividerWidth = item.nativeElement.offsetWidth - (nameWidth + priceWidth + 20);

        serviceDivider.style.width = `${dividerWidth}px`;
      }
    });
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 450;
  }

  onSelectSpecialistFromList(specialist: string): void {
    this.selectedSpecialist = specialist;
    console.log('Selected specialist:', this.selectedSpecialist);
  }

  onSelectSpecialistFromDropdown(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSpecialist = target.value;
    console.log('Selected specialist:', this.selectedSpecialist);
  }

  getSelectedServices(): Service[] {
    return this.services[this.selectedSpecialist!] || [];
  }

  downloadPriceList(specialist: string): void {
    this.priceListService.downloadPriceList(specialist).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Прайс-лист_${specialist}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  downloadFullPriceList(): void {
    this.priceListService.downloadFullPriceList().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Полный_прайс-лист.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
