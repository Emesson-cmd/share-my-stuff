import prisma from '@/lib/prisma';

export const userRepository = {
  findById: (id: string) => prisma.user.findUnique({ where: { id } }),

  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),

  findAll: () =>
    prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    }),

  create: (data: { name: string; email: string }) =>
    prisma.user.create({ data }),
};
