import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        // Преобразуем номер в строку и удаляем все нецифровые символы
        const phoneStr = value.toString().replace(/\D/g, '');

        // Проверяем длину номера для корректного форматирования
        if (phoneStr.length !== 10) {
            return 'Некорректный номер';
        }

        // Форматируем номер
        const formattedPhone = `+7(${phoneStr.slice(0, 3)})-${phoneStr.slice(
            3,
            5
        )}${phoneStr.slice(5)}`;
        return formattedPhone;
    }
}
