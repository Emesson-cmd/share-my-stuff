import { userService } from '@/services/userService';
import Link from 'next/link';

export default async function UserList() {
  const users = await userService.findAll();
  return (
    <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ol>
  );
}
