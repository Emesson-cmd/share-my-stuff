import { postRepository } from '@/repositories/postRepository';

export const postService = {
  async findAll() {
    return postRepository.findAll();
  },

  async findById(id: number) {
    return postRepository.findById(id);
  },

  async create(data: { title: string; content: string; authorId: number }) {
    return postRepository.create(data);
  },

  async findPostsByUserId(userId: number) {
    return postRepository.findPostsByUserId(userId);
  },
};
