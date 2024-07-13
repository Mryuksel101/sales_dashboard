import React from 'react'
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
import { getDataSales } from './services/salesDataService.ts';

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute/>,
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace />,
          },
          {
            loader: async () => {
              const data = await getDataSales();
              return { data };

            },
            path: "/home",
            element: <Home />,
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
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={BrowserRouter}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
