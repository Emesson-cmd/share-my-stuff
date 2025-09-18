import { postService } from '@/services/postService';
import Link from 'next/link';

export default async function PostList() {
  const posts = await postService.findAll();
  return (
    <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="hover:underline">
            <span className="font-semibold">{post.title}</span>
          </Link>
          <span className="text-sm text-gray-600 ml-2">
            by {post.author.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
