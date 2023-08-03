import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATHNAMES } from '../consts';
import { MainPage } from '../pages';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={PATHNAMES.main} element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
