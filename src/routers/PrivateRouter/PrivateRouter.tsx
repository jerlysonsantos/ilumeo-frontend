import { IPrivateRoute } from '../../interfaces/PrivateRouter/IPrivateRouter';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/is-auth';

export const PrivateRouter = ({ children }: IPrivateRoute) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <>{children}</>;
};
