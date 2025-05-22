import { Product } from "@/lib/types";
import ProductCard from "./product-card";

interface ProductListProps {
    data: Product[];
    title: string;
    limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ data, title }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    // <div key={product.id} className="p-4 border rounded-lg">
                    //     <h2 className="text-lg font-semibold">{product.name}</h2>
                    //     <p className="text-muted-foreground">{product.description}</p>
                    // </div>
                ))}
            </div>
        </div>
    )
}   

export default ProductList;   