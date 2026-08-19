import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import MainPage from 'pages/main';
const TaskPage = lazy(() => import('pages/tasks'));
const PortalShowcase = lazy(() => import('pages/portal-showcase'));
import { App } from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'tasks',
        element: <TaskPage />,
      },
      {
        path: 'portal-showcase',
        element: <PortalShowcase />,
      },
    ],
  },
]);
