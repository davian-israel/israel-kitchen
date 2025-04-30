export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    image: string;
    category?: string;
    brand?: string;
    rating?: number;
    numReviews?: number;
    stock?: number;
    isFeatured?: boolean;
    banner?: string;    
    images?: string[];          
} 