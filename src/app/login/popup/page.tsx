// This page only serves to initiate the Google login process and, after completion, will notify the main page to perform a login.
'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPopup() {
  useEffect(() => {
    function handleBeforeUnload() {
      if (window.opener) {
        window.opener.postMessage('login-cancelled', '*');
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    signIn('google', { callbackUrl: '/login/success' });

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <p>Redirecting to Google...</p>;
}
