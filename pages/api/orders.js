import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //get orders
  if (req.method === 'GET') {
    const type = req.query.type;
    let orders;
    switch (type) {
      case 'pending':
        orders = await prisma.orders.findMany({
          where: {
            status: false,
          },
        });

        break;
      case 'completed':
        orders = await prisma.orders.findMany({
          where: {
            status: true,
          },
        });
        break;
      default:
        break;
    }
    prisma.$disconnect();
    res.status(200).json(orders);
  }
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
    prisma.$disconnect();
    res.status(200).json(order);
  }
}
