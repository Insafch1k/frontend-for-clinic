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
    complex?: string;
    listAnal: {
        name: string;
        price: number;
    }[];
    sum: number;
    discounted: number;
}
