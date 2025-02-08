import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reviewDate',
})
export class ReviewDatePipe implements PipeTransform {
    transform(valuer: Date): string {
        const value = new Date(valuer);
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            return ''; // Возвращаем пустую строку, если значение не является корректной датой
        }

        // Определяем массивы для месяцев и дней
        const months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ];

        // Получение дня, месяца, года и времени
        const day = value.getDate();
        const month = months[value.getMonth()];
        const year = value.getFullYear();
        const hours = value.getHours().toString().padStart(2, '0');
        const minutes = value.getMinutes().toString().padStart(2, '0');

        // Формирование строки даты
        return `${day} ${month} ${year}\nв ${hours}:${minutes}`;
    }
}
