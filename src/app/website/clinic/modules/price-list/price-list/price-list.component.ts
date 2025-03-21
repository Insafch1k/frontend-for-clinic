import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ElementRef,
    ViewChildren,
    QueryList,
} from '@angular/core';
import { PriceListService } from '../price-list.service';
import { IService } from '../price-list.interfase';

@Component({
    selector: 'app-price-list',
    templateUrl: './price-list.component.html',
    styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit, OnDestroy, AfterViewInit {
    specialists: string[] = [];

    isMobile: boolean = false;

    selectedService!: IService;
    services: IService[] = [];
    selectedSpecialist: string | null = null;
    currentIndex: number = 0;

    @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

    constructor(private priceListService: PriceListService) {}

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize.bind(this));
        this.fetchActions();
    }

    fetchActions() {
        this.priceListService.getServices().subscribe((answer: IService[]) => {
            this.services = answer;
            this.specialists = this.services.map(service => service.name);
            if (this.specialists.length > 0) {
                this.selectedSpecialist = this.specialists[0];
                this.selectedService = this.services[0];
            }
        });
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.checkScreenSize.bind(this));
    }

    ngAfterViewInit(): void {
        this.serviceItems.forEach((item) => {
            const serviceName =
                item.nativeElement.querySelector('.service-name');
            const servicePrice =
                item.nativeElement.querySelector('.service-price');
            const serviceDivider =
                item.nativeElement.querySelector('.service-divider');

            if (serviceName && servicePrice && serviceDivider) {
                const nameWidth = serviceName.offsetWidth;
                const priceWidth = servicePrice.offsetWidth;
                const dividerWidth =
                    item.nativeElement.offsetWidth -
                    (nameWidth + priceWidth + 20);

                serviceDivider.style.width = `${dividerWidth}px`;
            }
        });
    }

    checkScreenSize(): void {
        this.isMobile = window.innerWidth <= 450;
    }

    onSelectSpecialistFromList(specialist: string): void {
        this.selectedSpecialist = specialist;
        this.changeSelectedServices();
    }

    onSelectSpecialistFromDropdown(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.selectedSpecialist = target.value;
        this.changeSelectedServices();
    }

    changeSelectedServices() {
        const index = this.specialists.indexOf(this.selectedSpecialist!);
        if (index !== -1) {
            this.selectedService = this.services[index];
        }
    }

    downloadPriceListFromAssets(): void {
        const fileName = 'Прайс лист Клиника-03.pdf'; // Замените на имя вашего файла
        const filePath = `assets/data/pdfs/${fileName}`;
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
