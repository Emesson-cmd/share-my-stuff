import Form from 'next/form';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { postService } from '@/services/postService';
import Title from '@/app/components/ui/Title';
import { getUserSession } from '@/lib/session';

export default async function NewPost() {
  const user = await getUserSession();

  if (!user) {
    redirect('/');
  }

  async function createPost(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    await postService.create({
      title,
      content,
      authorId: user.id,
    });

    revalidatePath('/posts');
    redirect('/posts');
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Title>Create New Post</Title>
      <Form action={createPost} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your post content here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </Form>
    </div>
  );
}
