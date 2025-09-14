import { Post, User } from '@/generated/prisma';

export interface PostWithAuthor extends Post {
  author: User;
}
