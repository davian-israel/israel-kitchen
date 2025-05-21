export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    images: string[];
    category?: string;
    brand?: string;
    rating?: number;
    numReviews?: number;
    stock?: number;
    isFeatured?: boolean;
    banner?: string;    
} 

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
}   

export interface Brand {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
}   

