'use client';

import { signOut } from 'next-auth/react';

export default function ButtonLogout() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      Sair
    </button>
  );
}
