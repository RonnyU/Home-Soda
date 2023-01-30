import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  prisma.$disconnect();
  res.status(200).json({ products });
}
