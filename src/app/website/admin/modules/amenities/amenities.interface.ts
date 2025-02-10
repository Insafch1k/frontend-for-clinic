export interface Service {
    id?: number;
    name: string;
    price: number;
    speciality: string;
    selected?: boolean;
  }
  
  export interface Speciality {
    id: number;
    name: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    message?: string;
    service_id?: number;
  }
  