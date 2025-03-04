export interface IAnalysisDesc {
    name: string;
    description: string;
    answer?: string;
    listName: string;
    listServ: string[];
}

export interface ICheckUp {
    name: string;
    description: string;
    complex?: string; // Добавьте это свойство
    analyses: {
        id: number;
        name: string;
        price: number;
    }[];
    listAnal?: {
        name: string;
        price: number;
    }[]; // Добавьте это свойство
    sum?: number;
    discounted?: number;
}
