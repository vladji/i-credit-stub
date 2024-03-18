import { FC, useEffect, useState } from 'react';
import { Spinner } from '../UI/Spinner';
import { Modal } from '../UI/Modal';
import styles from './styles.module.scss';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Documents: FC<Props> = ({ visible, onClose }) => {
  const [showSpinner, setShowSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 2000);
    }
    return () => setShowSpinner(true);
  }, [visible]);

  return (
    <Modal visible={visible} onClose={onClose} cardClassName={styles.documentsCard}>
      <>
        {showSpinner && <Spinner />}
        {!showSpinner && <p>Ой... что-то пошло не так</p>}
      </>
    </Modal>
  );
};
