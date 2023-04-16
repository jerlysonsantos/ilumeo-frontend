import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthenticateUser } from '../interfaces/Auth/AuthenticateUser.interface';

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

export const useGetUser = (): AuthenticateUser | void => {
  const user = Cookies.get('user');

  if (!user) {
    return;
  }

  return JSON.parse(user);
};
