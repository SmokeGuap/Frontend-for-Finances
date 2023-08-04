import Button from '@/components/Button';
import styles from './Registration.module.scss';

const Registration = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <h2>First time here?</h2>
      <p className={styles.subTitle}>Sign Up! It's free</p>
    </div>
    <Button onClick={() => console.log()} variant='brand'>
      Sign Up
    </Button>
  </div>
);

export default Registration;
