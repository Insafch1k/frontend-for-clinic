import { Component, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { event } from 'yandex-maps';

interface DgMap {
    map: (container: string, options: object) => any;
    marker: (coords: [number, number]) => any;
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {
    public map!: L.Map;

    // Desc: Инициализация карты
    // Author: Gosman
    private initMap(): void {
        this.map = L.map('map', {
            center: [55.7167, 52.4016],
            zoom: 17,
            maxZoom: 18,
            minZoom: 6,
            zoomControl: false,
        });

        // Добавление слоя с картами Яндекса (используя Yandex API)
        // L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}', {
        //     maxZoom: 20,
        //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        // }).addTo(this.map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);

        (
            document.getElementsByClassName(
                'leaflet-control-attribution'
            )[0] as any
        ).style.display = 'none';

        this.map.doubleClickZoom.disable();

        const customIcon = L.icon({
            iconUrl:
                'assets/data/icon/header/map_navigation_pin_maps_pointer_clinic_placeholder_location_hospital_icon_210661.svg', // Путь к вашей иконке
            iconSize: [60, 60], // Размер иконки
            // iconAnchor: [22, 94], // Куда указывать иконка
            popupAnchor: [-3, -76], // Смещение всплывающего окна
        });

        const marker = L.marker([55.71671012, 52.40161091], {
            icon: customIcon,
        }).addTo(this.map);

        marker.on('click', (event: any) => {
            this.goToYandex();
        });
    }

    ngOnInit(): void {
        this.initMap();
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
