import { redirect } from 'next/navigation';
import ButtonGoogle from '@/app/components/features/ButtonGoogle';
import { getUserSession } from '@/lib/session';

export default async function Home() {
  const user = await getUserSession();

  if (user) {
    redirect('/posts');
  }

  return <ButtonGoogle />;
}
