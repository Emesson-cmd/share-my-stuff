import Plus from '@/app/assets/icons/Plus';
import Link from 'next/link';

export default function NewPostButton() {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <Link
        href="/posts/new"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl shadow-lg flex items-center justify-center"
      >
        <span className="mr-2 text-lg flex items-center">New Post</span>
        <Plus />
      </Link>
    </div>
  );
}
