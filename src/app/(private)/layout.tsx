import { redirect } from 'next/navigation';
import { getUserSession } from '../lib/session';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserSession();

  if (!user) {
    redirect('/');
  }

  return <div>{children}</div>;
}
