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
      </div>
    </header>
  );
};
