import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Navigate, createHashRouter } from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import './assets/styles/normalize.css';
import './assets/styles/index.css';
import ResultPage from './components/ResultPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
