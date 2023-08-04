import { FC, useState } from 'react';

import { PagesLayout } from '@/types';

import styles from './PageLayout.module.scss';

const PageLayout: FC<PagesLayout> = ({
  pageName,
  leftColumnChildren,
  rightColumnChildren,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.title}>{pageName}</p>
        {isLogin && (
          <div className={styles.count}>
            <p>100 000</p>
            <p>На счету</p>
          </div>
        )}
      </header>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>{leftColumnChildren}</div>
        <div className={styles.rightColumn}>{rightColumnChildren}</div>
      </div>
    </div>
  );
};

export default PageLayout;
