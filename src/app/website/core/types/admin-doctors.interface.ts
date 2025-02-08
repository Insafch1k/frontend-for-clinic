export interface Education {
    name: string;
    year: number;
  }
  
  export interface Doctor {
    id: number;
    id_easyclinic: number;
    name: string; // Используем name для ФИО
    photo: string | null;
    experiance: number | null;
    phone_number: string | null;
    educations: Education[];
    specialties: string[];
    selected?: boolean; // Добавляем свойство для отслеживания выбранных врачей
  }
  