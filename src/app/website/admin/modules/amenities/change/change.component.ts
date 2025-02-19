import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmenitiesService } from '../services/amenities.service';
import { Service as ServiceModel, Speciality } from '../amenities.interface';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  service: ServiceModel = { name: '', price: 0, speciality: '' };
  specializations: Speciality[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private amenitiesService: AmenitiesService
  ) {}

  ngOnInit(): void {
    this.loadSpecializations();
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId) {
      this.amenitiesService.getServices().subscribe(services => {
        this.service = services.find(s => s.id === +serviceId) || this.service;
      });
    }
  }

  loadSpecializations(): void {
    this.amenitiesService.getSpecialities().subscribe(data => {
      this.specializations = data;
    });
  }

  saveChanges(): void {
    if (this.service.id) {
      this.amenitiesService.updateService(this.service.id, {
        service_name: this.service.name,
        price: this.service.price,
        speciality_id: this.specializations.find(s => s.name === this.service.speciality)?.id || 0
      }).subscribe(() => {
        this.router.navigate(['/admin/amenities']);
      });
    }
  }
}
