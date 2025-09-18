import PostList from '@/app/(private)/posts/componets/PostList';
import Title from '@/app/components/ui/Title';

export default async function Posts() {
  return (
    <>
      <Title>Posts</Title>
      <PostList />
    </>
  );
}
