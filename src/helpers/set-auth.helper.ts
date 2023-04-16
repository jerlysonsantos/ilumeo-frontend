import Cookies from 'js-cookie';
import { AuthenticateUser } from '../interfaces/Auth/AuthenticateUser.interface';

export const setAuth = (token: string, user: AuthenticateUser) => {
  Cookies.set('token', token, { expires: 24 * 60 * 60 * 1000 });
  Cookies.set('user', JSON.stringify(user), { expires: 24 * 60 * 60 * 1000 });
};
