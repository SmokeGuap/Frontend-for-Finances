import PageLayout from '@/layouts/PageLayout';
import Registration from './Registration';
import Authorization from './Authorization';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <PageLayout
    pageName='Welcome'
    leftColumnChildren={<Registration />}
    rightColumnChildren={<Authorization />}
  />
);

export default MainPage;
