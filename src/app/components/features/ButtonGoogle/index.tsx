'use client';

import { signIn } from 'next-auth/react';

export default function ButtonGoogle() {
  return (
    <button
      onClick={() => signIn('google')}
      className="mb-8 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
    >
      Entrar com Google
    </button>
  );
}
