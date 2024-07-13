import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = (): JSX.Element => {
  const auth = useAuth();
  if (auth==null || auth.user == null) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;