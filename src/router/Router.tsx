import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATHNAMES } from 'src/consts';
import { MainPage } from 'src/pages';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={PATHNAMES.main} element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
