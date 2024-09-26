import { Navigate, Outlet, useNavigation } from 'react-router-dom';
import { getCookie } from '../services/authService';

const ProtectedRoute = (): JSX.Element => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <p>Yükleniyor...</p>;
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