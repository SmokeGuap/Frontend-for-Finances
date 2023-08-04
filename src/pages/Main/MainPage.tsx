import PageLayout from '@/layouts/PageLayout';
import Registration from './Registration';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <PageLayout pageName='Welcome' leftColumnChildren={<Registration />} />
);

export default MainPage;
