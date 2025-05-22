import { z } from "zod";
import { formatPrice } from "./utils";

///schema for inserting prodcuts
const currency = z
.string()
.refine(
    value => /^\d+(\.\d{1,2})?$/.test(formatPrice(Number(value))),
    'Price must have exactly 2 decimal places'
)

export const insertProductSchema = z.object({
    name: z.string().min(3,'Name must be at least 3 characters long'),
    slug: z.string().min(3,'Slug must be at least 3 characters long'),
    category: z.string().min(3,'Category must be at least 3 characters long'),
    brand: z.string().min(3,'Brand must be at least 3 characters long'),
    description: z.string().min(10,'Description must be at least 10 characters long'),
    stock: z.number().min(0,'Stock must be greater than 0'),
    image: z.string().min(1,'Image is required'),
    isFeatured: z.boolean().optional(),
    banner: z.string().nullable(),
    price: currency,
});

///schema for updating products

export const updateProductSchema = z.object({
    
})
