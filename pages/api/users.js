import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({
    where: {
      name: req.query.name,
      password: req.query.password,
    },
  });
  prisma.$disconnect();
  res.status(200).json({ user });
}
