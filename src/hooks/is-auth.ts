import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthState {
  isAuthenticated: boolean;
}

const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
  });

  useEffect(() => {
    const cookieValue = Cookies.get('token');
    if (cookieValue) {
      setAuthState({ isAuthenticated: true });
    } else {
      setAuthState({ isAuthenticated: false });
    }
  }, []);

  return authState;
};

export default useAuth;
