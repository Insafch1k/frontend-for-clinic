import { Component, OnInit } from '@angular/core';
import { AmenitiesService } from '../services/amenities.service';
import { Service as ServiceModel } from '../amenities.interface';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
  services: ServiceModel[] = [];

  constructor(private amenitiesService: AmenitiesService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.amenitiesService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  selectAll(): void {
    this.services.forEach(service => service.selected = true);
  }

  deleteSelected(): void {
    const selectedServices = this.services.filter(service => service.selected);
    selectedServices.forEach(service => {
      if (service.id) {
        this.deleteService(service.id);
      }
    });
  }

  deleteService(id: number): void {
    this.amenitiesService.deleteService(id).subscribe(() => {
      this.loadServices(); // Перезагружаем список услуг после удаления
    });
  }

  toggleSelection(service: ServiceModel, event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      return;
    }
    service.selected = !service.selected;
  }
}
