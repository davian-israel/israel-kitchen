import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export const ProductCard = ({ product }: { product: Product; }) => {
    return (<Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
            <Link href={`/products/${product.slug}`}>
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority={true}
                />
            </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
        </CardContent>
    </Card>);
}
export default ProductCard;