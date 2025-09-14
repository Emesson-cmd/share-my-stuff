import { userService } from '@/services/userService';

export default async function UserList() {
  const users = await userService.findAll();
  return (
    <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          {user.name}
        </li>
      ))}
    </ol>
  );
}
