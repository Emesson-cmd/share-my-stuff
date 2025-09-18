import { postRepository } from '@/repositories/postRepository';

export const postService = {
  async findAll() {
    return postRepository.findAll();
  },

  async findById(id: string) {
    return postRepository.findById(id);
  },

  async create(data: { title: string; content: string; authorId: string }) {
    return postRepository.create(data);
  },

  async findPostsByUserId(userId: string) {
    return postRepository.findPostsByUserId(userId);
  },
};
