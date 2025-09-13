import { redirect } from 'next/navigation';
import ButtonGoogle from './components/features/ButtonGoogle';
import { getUserSession } from './lib/session';

export default async function Home() {
  const user = await getUserSession();

  if (user) {
    redirect('/users');
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 uppercase">Sign In</h1>
      <ButtonGoogle />
    </>
  );
}
