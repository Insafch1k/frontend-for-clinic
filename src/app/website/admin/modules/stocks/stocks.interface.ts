export interface Action {
    action_id: number;
    category_name: string;
    description: string;
    photo: string;
    selected?: boolean; // Свойство для отслеживания выбранных записей
  }
  
  export interface NewAction {
    photo: string;
    description: string;
    category_id: number;
    category?: string; // Свойство для имени категории
  }
  
  export interface ActionResponse {
    id: number;
  }
  
  export interface DeleteResponse {
    success: boolean;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  