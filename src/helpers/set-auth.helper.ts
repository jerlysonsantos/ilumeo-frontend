import Cookies from 'js-cookie';
import { IAuthenticateUser } from '../interfaces/Auth/IAuthenticateUser.interface';

export const setAuth = (token: string, user: IAuthenticateUser) => {
  Cookies.set('token', token, { expires: 24 * 60 * 60 * 1000 });
  Cookies.set('user', JSON.stringify(user), { expires: 24 * 60 * 60 * 1000 });
};
