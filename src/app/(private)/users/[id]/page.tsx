import { postRepository } from '@/repositories/postRepository';
import { userService } from '@/services/userService';
import Card from '../../posts/componets/PostCard';
import Title from '@/app/components/ui/Title';

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return <div>User not found</div>;
  }

  const user = await userService.findById(id);
  if (!user) {
    return <div>User not found</div>;
  }

  const posts = await postRepository.findPostsByUserId(id);
  return (
    <>
      <Title>Posts by {user.name}</Title>
      {posts.length > 0 ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content?.slice(0, 100) ?? ''}
            />
          ))}
        </div>
      ) : (
        <p>No posts found for this user.</p>
      )}
    </>
  );
}
