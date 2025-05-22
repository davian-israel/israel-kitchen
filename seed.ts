import { PrismaClient } from '@prisma/client';
import sampleData from './src/db/sampleData';

const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data
    await prisma.product.deleteMany();

    // Insert sample products
    for (const product of sampleData.products) {
      await prisma.product.create({
        data: {
          name: product.name,
          slug: product.slug,
          category: product.category,
          description: product.description,
          images: product.images,
          price: product.price,
          brand: product.brand,
          rating: product.rating,
          numReviews: product.numReviews,
          stock: product.stock,
          isFeatured: product.isFeatured,
          banner: product.banner,
        },
      });
    }

    console.log('Database has been seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 