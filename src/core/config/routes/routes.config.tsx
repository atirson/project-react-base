import { RouteProps } from 'react-router-dom';
import Users from '@app/pages/Users';
import FormExample from '@app/pages/FormExample';

export const routes: RouteProps[] = [
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '*',
    element: <div><h1>Not found!</h1></div>,
  },
  {
    path: '/form',
    element: <FormExample />,
  },
];
