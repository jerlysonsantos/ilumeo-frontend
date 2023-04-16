import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound/NotFound';
import { PrivateRouter } from './PrivateRouter/PrivateRouter';
import { Timesheet } from '../pages/Timesheet/Timesheet';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route index element={<Login />} />
      <Route
        path="/timesheet"
        element={
          <PrivateRouter>
            <Timesheet />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
