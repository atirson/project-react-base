import { routes } from '@app/core/config/routes/routes.config';
import { Routes as Router, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      {
        routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      }
    </Router>
  );
}
