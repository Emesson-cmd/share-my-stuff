'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import Spinner from '@/app/components/ui/Spinner';
import { DropdownItem } from 'flowbite-react';
import LogoutIcon from '@/app/assets/icons/LogoutIcon';

export default function ButtonLogout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
  };

  return (
    <DropdownItem
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center justify-between"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          Sign out
          <LogoutIcon width={20} height={20} />
        </>
      )}
    </DropdownItem>
  );
}
