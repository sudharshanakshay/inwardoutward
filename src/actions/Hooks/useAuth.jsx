import { useState } from 'react';

export default function useAuth() {

  const getAuth = () => {
    const authString = sessionStorage.getItem('auth');
    const authStatus = JSON.parse(authString);
    return authStatus?.auth
  };

  const [auth, setAuth] = useState(getAuth());

  const saveAuth = authStatus => {
    sessionStorage.setItem('auth', JSON.stringify(authStatus));
    setAuth(authStatus.auth);
  };

  return {
    setAuth: saveAuth,
    auth
  }
}