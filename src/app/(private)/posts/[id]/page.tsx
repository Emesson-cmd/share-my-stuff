import { notFound } from 'next/navigation';
import { postService } from '@/services/postService';
import Title from '@/app/components/ui/Spinner/Title';

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await postService.findById(parseInt(id, 10));

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
      <Title>{post.title}</Title>
      <p className="text-gray-600 text-center">by {post.author.name}</p>
      <div className="prose prose-gray mt-8">
        {post.content || 'No content available.'}
      </div>
    </article>
  );
}
