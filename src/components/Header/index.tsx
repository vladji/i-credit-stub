import { LogoIcon } from '../../icons/LogoIcon';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoWrapper}>
          <a href="/">
            <LogoIcon />
          </a>
        </div>
        <div className={styles.callCenter}>
          <span className={styles.title}>Call center:</span>
          <a href="tel:+77089128007">
                <span className={styles.value}>
                <span className={styles.mark}>+7 708 </span>
                912 80 07
              </span>
          </a>
        </div>
      </div>
    </header>
  );
};
