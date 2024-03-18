import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { CardBlank } from '../CardBlank';
import { CrossIcon } from '../../../icons/CrossIcon';

interface Props {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  cardClassName?: string;
}

const MODAL_ID = 'modal-wrapper';

export const Modal: FC<Props> = ({ visible, onClose, children, cardClassName }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const handleClose = (e: any) => {
    const elementId = e.target.id;
    if (elementId === MODAL_ID) {
      onClose();
    }
  };

  return (
    <>
      {visible && createPortal(
        <div id={MODAL_ID} onClick={handleClose} className={styles.modalWrapper}>
          <CardBlank className={cardClassName}>
            <button className={styles.closeButton} onClick={onClose}>
              <CrossIcon />
            </button>
            {children}
          </CardBlank>
        </div>,
        document.body
      )}
    </>
  );
};
