import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import MainPage from 'pages/main';
import NotFoundPage from 'pages/notFound';
const TaskPage = lazy(() => import('pages/tasks'));
const DemoUseRefPage = lazy(() => import('pages/demoUseRef'));
const WizardFormPage = lazy(() => import('pages/wizardFormPage'));
const SignUpPage = lazy(() => import('pages/signUp'));


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
        path: 'wizardForm',
        element: <WizardFormPage />,
      },
      {
        path: 'useRef',
        element: <DemoUseRefPage />,
      },
      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
