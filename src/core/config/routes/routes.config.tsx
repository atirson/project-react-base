import { RouteProps } from 'react-router-dom';
import Users from '@app/pages/Users';
import FormExample from '@app/pages/FormExample';
import ContextExample from '@app/pages/ContextExample';

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
];
