export interface Analysis {
    id: number;
    name: string;
    category: string;
    price: number;
    selected?: boolean; // Добавляем это свойство
  }
  
  
  export interface Category {
    id: number;
    name: string;
    description: string;
    analysis?: number[];
  }
  
  export interface NewAnalysis {
    name: string;
    price: number;
    category_id: number[];
  }
  
  export interface NewCategory {
    name: string;
    description: string;
    analysis: number[];
  }
  