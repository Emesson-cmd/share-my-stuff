import UserList from '@/app/components/features/UserLIst';

export default function UsersPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <UserList />
    </>
  );
}
