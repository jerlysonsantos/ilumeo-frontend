import { IPrivateRoute } from '../../interfaces/PrivateRouter/IPrivateRouter.interface';
import { Navigate } from 'react-router-dom';
import { useIsAuth } from '../../hooks/user-auth';

export const PrivateRouter = ({ children }: IPrivateRoute) => {
  const { isAuthenticated } = useIsAuth();

  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <>{children}</>;
};
