import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import SignIn from './pages/SignIn.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { getOrders } from './services/ordersService.ts';
import { getCookie } from './services/authService.ts';
import OrderDetailPage from './pages/OrderDetail.tsx';
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace />,
          },
          {
            loader: async () => {
              const token = getCookie('token');
              if (!token) {
                throw new Error('Token not found');
              }
              return getOrders(token);
            },
            path: "/home",
            element: <Home />,
            shouldRevalidate: () => {
              // return nextUrl.pathname === '/home'; // sadece /home path'inde loader çalışsın
              return false;
            },
            children: [
              {
                element: <OrderDetailPage onClose={function (): void {
                }} />,
                path: "order/:id",  // Dinamik route düzenlemesi
              }
            ]
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          }
        ]
      },
    ]
  },
  {
    path: "/signin",
    element: <SignIn />,
    children: [

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={BrowserRouter}>
    </RouterProvider>
  </AuthProvider>
)
