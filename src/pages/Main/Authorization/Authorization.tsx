import Button from '@/components/Button';
import styles from './Authorization.module.scss';

const Authorization = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <h2>Already registered?</h2>
      <p className={styles.subTitle}>Let's start!</p>
    </div>
    <Button onClick={() => console.log()} variant='brand'>
      Sign In
    </Button>
  </div>
);

export default Authorization;
