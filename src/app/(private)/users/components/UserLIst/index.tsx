import { userService } from '@/services/userService';
import Link from 'next/link';

export default async function UserList() {
  const users = await userService.findAll();
  return (
    <ul className="list-disc pl-5">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}
