import styles from './styles.module.scss';
import { CardBlank } from '../UI/CardBlank';
import { MakePayment } from '../MakePayment';

export const Stub = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.containerInner}>
          <CardBlank className={styles.infoCard}>
            <h3>Уважаемые пользователи</h3>
            <p>В связи с техническими работами, в определенный период времени возможны
              некоторые временные ограничения в
              доступе к функциям сайта.
              Благодарим за ваше понимание и терпение.
            </p>
            <a className={styles.cardLink} href="tel:+77089128007">+7 708 912 80 07</a>
          </CardBlank>
          <MakePayment />
        </div>
      </div>
    </section>
  );
};
