import { Product } from "@/lib/types";

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-muted-foreground">{product.description}</p>
                </div>
            ))}
        </div>
    )
}   

export default ProductList;   