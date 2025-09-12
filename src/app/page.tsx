import prisma from '@/app/lib/prisma';
import ButtonGoogle from './components/ButtonGoogle';

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="h-[calc(100vh-65px)] bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ButtonGoogle />
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
