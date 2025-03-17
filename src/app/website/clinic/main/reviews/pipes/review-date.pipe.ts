import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reviewDate',
})
export class ReviewDatePipe implements PipeTransform {
    transform(value: Date): string {
        const date = new Date(value);
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            return ''; // Возвращаем пустую строку, если значение не является корректной датой
        }

        // Определяем массивы для месяцев
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

        // Получение дня и месяца
        const day = date.getDate();
        const month = months[date.getMonth()];
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Формирование строки даты без года
        return `${day} ${month} в ${hours}:${minutes}`;
    }
}
