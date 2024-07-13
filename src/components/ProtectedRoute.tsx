import { Navigate, Outlet, useNavigation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = (): JSX.Element => {
  const auth = useAuth();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <p>Loading...</p>;   
  }
  else if (auth==null || auth.user == null) {
    return <Navigate to="/signin" />;
  }
  else {
    return <Outlet />;
  }
};

export default ProtectedRoute;