import prisma from '@/lib/prisma';

export const userRepository = {
  findById: (id: number) => prisma.user.findUnique({ where: { id } }),

  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),

  findAll: () => prisma.user.findMany(),

  create: (data: { name: string; email: string }) =>
    prisma.user.create({ data }),
};
