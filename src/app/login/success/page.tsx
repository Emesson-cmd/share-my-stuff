// When NextAuth finishes the login, it redirects to here. This page notifies the main page to perform a login and, if successful, closes the popup.
'use client';

import { useEffect } from 'react';

export default function LoginSuccess() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage('login-success', window.location.origin);
      window.close();
    }
  }, []);

  return <p>Completing login...</p>;
}
