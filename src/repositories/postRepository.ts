import prisma from '@/lib/prisma';

export const postRepository = {
  findAll: () =>
    prisma.post.findMany({
      include: { author: true },
      orderBy: { createdAt: 'desc' },
    }),

  findById: (id: string) =>
    prisma.post.findUnique({ where: { id }, include: { author: true } }),

  create: (data: { title: string; content: string; authorId: string }) =>
    prisma.post.create({ data }),

  findPostsByUserId: (userId: string) =>
    prisma.post.findMany({
      where: { authorId: userId },
      include: { author: true },
    }),
};
