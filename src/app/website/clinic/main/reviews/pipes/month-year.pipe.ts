import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'monthYear',
})
export class MonthYearPipe implements PipeTransform {
    transform(value: Date): string {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            return ''; // Возвращаем пустую строку, если значение не является корректной датой
        }

        // Массивы для месяцев
        const monthsGenitive = [
            'январе',
            'феврале',
            'марте',
            'апреле',
            'мае',
            'июне',
            'июле',
            'августе',
            'сентябре',
            'октябре',
            'ноябре',
            'декабре',
        ];

        // Получение номера месяца и года
        const monthIndex = value.getMonth(); // индекс месяца от 0 до 11
        const year = value.getFullYear(); // получение года

        // Формирование строки
        return `${monthsGenitive[monthIndex]} ${year}`;
    }
}
