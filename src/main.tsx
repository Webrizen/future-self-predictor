import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error-page.tsx';
import Home from './pages/Home.tsx';
import Playground from './pages/playground.tsx';
import Howitworks from './pages/Howitworks.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/playgroud",
    element: <Playground />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/how-it-works",
    element: <Howitworks />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
