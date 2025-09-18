import { redirect } from 'next/navigation';
import { getUserSession } from '@/lib/session';
import NewPostButton from '@/app/components/features/NewPostButton/index';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserSession();

  if (!user) {
    redirect('/');
  }

  return (
    <div className="container mx-auto p-4 h-full flex flex-col">
      {children}
      <NewPostButton />
    </div>
  );
}
