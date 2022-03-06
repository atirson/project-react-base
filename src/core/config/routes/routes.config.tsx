import { RouteProps } from 'react-router-dom';
import Users from '@pages/Users';
import FormExample from '@pages/FormExample';
import ContextExample from '@pages/ContextExample';
import ReduxExample from '@pages/ReduxExample';

export const routes: RouteProps[] = [
  {
    path: '*',
    element: <div><h1>Not found!</h1></div>,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/form',
    element: <FormExample />,
  },
  {
    path: '/context',
    element: <ContextExample />,
  },
  {
    path: '/redux',
    element: <ReduxExample />,
  },
];
