export interface AppointmentRequest {
    analysis_id: number;
    analysis_name: string;
    category_name: string;
    selected?: boolean;
}

export interface Analysis {
    analysis_id: number;
    analysis_name: string;
    analysis_price: number;
}