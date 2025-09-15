import { userRepository } from '@/repositories/userRepository';

export const userService = {
  async create(name: string, email: string) {
    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw new Error('User already exists');
    }

    return userRepository.create({ name, email });
  },

  async findAll() {
    return userRepository.findAll();
  },

  async findById(id: number) {
    return userRepository.findById(id);
  },
};
