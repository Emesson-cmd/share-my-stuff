import PostList from '@/app/components/features/PostList';
import Title from '@/app/components/ui/Spinner/Title';

export default async function Posts() {
  return (
    <>
      <Title>Posts</Title>
      <PostList />
    </>
  );
}
