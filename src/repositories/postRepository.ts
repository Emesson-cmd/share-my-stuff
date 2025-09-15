import prisma from '@/lib/prisma';

export const postRepository = {
  findAll: () => prisma.post.findMany({ include: { author: true } }),

  findById: (id: number) =>
    prisma.post.findUnique({ where: { id }, include: { author: true } }),

  create: (data: { title: string; content: string; authorId: number }) =>
    prisma.post.create({ data }),

  findPostsByUserId: (userId: number) =>
    prisma.post.findMany({
      where: { authorId: userId },
      include: { author: true },
    }),
};
