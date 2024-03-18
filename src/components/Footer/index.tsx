import { EmailIcon } from '../../icons/EmailIcon';
import { VisaIcon } from '../../icons/VisaIcon';
import { MastercardIcon } from '../../icons/MastercardIcon';
import { MainButton } from '../UI/MainButton';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Documents } from './Documents';

export const Footer = () => {
  const [showDocuments, setShowDocuments] = useState(false);

  const showDocumentsHandler = () => {
    setShowDocuments((prev) => !prev);
  };

  return (
    <footer className={`section ${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.block} ${styles.topBlock}`}>
          <div>
            <div className={styles.contacts}>
              <div className={`${styles.row}`}>
                <EmailIcon />
                <a href="mailto:info@i-credit.kz">info@i-credit.kz</a>
              </div>
            </div>
            <div className={styles.cardsContainer}>
              <VisaIcon />
              <MastercardIcon />
            </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.bottomBlock}`}>
          <MainButton
            className={styles.footerButton}
            text="Документы"
            handler={showDocumentsHandler}
          />
          <div className={styles.info}>
            <p className={styles.text}>
              ТОО «I-Credit.kz» г. Алматы, 050057, ул. Толе би, 101
            </p>
            <p className={styles.text}>
              г. Алматы, БЦ "Толе би", 3 этаж, блок D
            </p>
            <p className={styles.text}>
              БИН: 070440003902 р/с: KZ55601A861010717701
              &quot;Народный Банк Казахстана&quot; Кбе 15
            </p>
            <p className={styles.text}>БИК: HSBKKZKX</p>
          </div>
        </div>
      </div>
      <Documents visible={showDocuments} onClose={showDocumentsHandler} />
    </footer>
  );
};
