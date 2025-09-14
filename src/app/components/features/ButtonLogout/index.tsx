'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import Spinner from '@/app/components/ui/Spinner';

export default function ButtonLogout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      disabled={loading}
    >
      {loading ? <Spinner /> : 'Logout'}
    </button>
  );
}
