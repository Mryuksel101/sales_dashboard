import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = (): JSX.Element => {
  let auth = useAuth();
  return auth?.user!=null ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;