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

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute isAuthenticated={false} />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace />,
          },
          {
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
    <RouterProvider router={BrowserRouter}>
    </RouterProvider>
  </React.StrictMode>,
)
