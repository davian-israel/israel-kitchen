import { PrismaClient } from "@prisma/client";
import { sampleData } from "./sampleData";



async function seed(){
    const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.review.deleteMany();

  
    await prisma.product.createMany({
      data: sampleData.products,
    });
    console.log("Database seeded successfully");
  }
  seed();
  