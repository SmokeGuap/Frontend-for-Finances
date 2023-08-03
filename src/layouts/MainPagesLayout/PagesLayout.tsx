import { FC, useState } from 'react';
import styles from './PagesLayout.module.scss';
import { PagesLayout } from '../../types';

const PagesLayout: FC<PagesLayout> = ({
  pageName,
  leftColumnChildren,
  rightColumnChildren,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>{pageName}</p>
        </div>
        {isLogin && (
          <div className={styles.count}>
            <p>100 000</p>
            <p>На счету</p>
          </div>
        )}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>{leftColumnChildren}</div>
        <div className={styles.rightColumn}>{rightColumnChildren}</div>
      </div>
    </div>
  );
};

export default PagesLayout;
