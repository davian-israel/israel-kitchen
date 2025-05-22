import { Decimal } from "@prisma/client/runtime/library";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: Decimal;
    slug: string;
    images: string[];
    category?: string;
    brand?: string;
    rating?: Decimal;
    numReviews?: number;
    stock?: number;
    isFeatured?: boolean;
    banner?: string | null;    
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

