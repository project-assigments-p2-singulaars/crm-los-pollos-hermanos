export interface Product {

    id?: number;
    name: string;
    categories?: string[];
    price?: GLfloat;
    imageUrl?: string;
    description?: string;
    stock?: number;
}
