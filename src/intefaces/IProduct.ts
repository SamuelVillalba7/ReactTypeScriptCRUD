export interface IProduct {
    id?: number;
    name: string;
    idCategory: number;
    description: string;
    price: number;
    urlImage: string;
    stock: number;
    state: boolean;
}