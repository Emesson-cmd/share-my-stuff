'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import GoogleLogo from '@/app/assets/images/google-logo.svg';

export default function ButtonGoogle() {
  const [loading, setLoading] = useState(false);

  function reloadAndReset() {
    setLoading(false);
    window.location.reload();
  }

  function handleLogin() {
    setLoading(true);

    const popup = window.open(
      '/login/popup',
      'Login with Google',
      'width=500,height=600'
    );

    window.addEventListener('message', (event) => {
      if (event.data === 'login-success') {
        popup?.close();
        reloadAndReset();
      }
    });
  }

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data === 'login-success') {
        reloadAndReset();
      } else if (event.data === 'login-cancelled') {
        setLoading(false);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      className="flex items-center justify-center w-full max-w-xs gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 font-medium disabled:opacity-70"
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="h-5 w-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Image
            className="w-5 h-5"
            src={GoogleLogo}
            alt="Google logo"
            width={20}
            height={20}
          />
          <span>Sign in with Google</span>
        </>
      )}
    </button>
  );
}
