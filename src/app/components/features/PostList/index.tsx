import { postService } from '@/services/postService';

export default async function PostList() {
  const posts = await postService.findAll();
  return (
    <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <span className="font-semibold">{post.title}</span>
          <span className="text-sm text-gray-600 ml-2">
            by {post.author.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
