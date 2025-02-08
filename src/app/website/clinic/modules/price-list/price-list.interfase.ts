export interface IService {
    id: number;
    name: string;
    services: IServiceMenu[];
}

export interface IServiceMenu {
    id: number;
    name: string;
    price: string;
}
