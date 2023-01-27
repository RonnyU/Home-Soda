import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //get orders
  const orders = await prisma.orders.findMany({
    where: {
      status: false,
    },
  });

  res.status(200).json(orders);

  //create orders
  if (req.method === 'POST') {
    const order = await prisma.orders.create({
      data: {
        name: req.body.name,
        date: req.body.date,
        total: req.body.total,
        order: req.body.order,
      },
    });

    res.status(200).json(order);
  }
}
