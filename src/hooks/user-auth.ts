import Cookies from 'js-cookie';
import { IAuthenticateUser } from '../interfaces/Auth/AuthenticateUser.interface';

interface AuthState {
  isAuthenticated: boolean;
}

export const useIsAuth = (): AuthState => {
  const cookieValue = Cookies.get('token');

  if (cookieValue) {
    return { isAuthenticated: true };
  } else {
    return { isAuthenticated: false };
  }
};

export const useGetUser = (): IAuthenticateUser | void => {
  const user = Cookies.get('user');

  if (!user) {
    return;
  }

  return JSON.parse(user);
};

export const useGetToken = (): string | void => {
  const token = Cookies.get('token');

  return token;
};
