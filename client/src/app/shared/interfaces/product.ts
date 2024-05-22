export interface Product {
    id?: number;
    name: string;
    price?: GLfloat;
    imageUrl?: string;
    categories?:string[]
    description?: string;
    stock?: number;
}
