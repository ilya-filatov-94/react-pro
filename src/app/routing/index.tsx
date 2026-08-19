import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import MainPage from 'pages/main';
import NotFoundPage from 'pages/notFound';
const TaskPage = lazy(() => import('pages/tasks'));
const SignUpPage = lazy(() => import('pages/signUp'));
const WizardFormPage = lazy(() => import('pages/wizardFormPage'));
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
        path: 'signUp',
        element: <SignUpPage />,
      },
      {
        path: 'wizardForm',
        element: <WizardFormPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
