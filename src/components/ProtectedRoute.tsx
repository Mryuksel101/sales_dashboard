import { Navigate, Outlet, useNavigation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getCookie } from '../services/authService';

const ProtectedRoute = (): JSX.Element => {
  const auth = useAuth();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <p>Loading...</p>;
  }

  // Token yoksa kullanıcıyı giriş sayfasına yönlendir
  const token = getCookie('token'); // authToken cookie'sini kontrol et
  if (token == null) {
    return <Navigate to="/signin" />;
  }
  else {
    return <Outlet />;
  }
};

export default ProtectedRoute;