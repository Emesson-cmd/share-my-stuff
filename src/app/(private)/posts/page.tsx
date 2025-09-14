import PostList from '@/app/components/features/PostList';

export default async function Posts() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <PostList />
    </>
  );
}
