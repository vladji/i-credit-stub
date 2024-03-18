import { useState } from 'react';
import { CardBlank } from '../UI/CardBlank';
import { MainButton } from '../UI/MainButton';
import { Modal } from '../UI/Modal';
import styles from './styles.module.scss';

export const MakePayment = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const makePayment = async () => {
    document.location.href = 'https://customer.freedompay.money/links?slug=H4hK2';
  };

  return (
    <>
      <CardBlank>
        <MainButton text="Внести оплату" handler={() => setShowModal(true)} />
      </CardBlank>
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.modalWrapper}>
          <p>Вы будете перенаправлены на страницу оплаты.<br /> В поле <b>"Номер заказа"</b> введите <b>свой ИИН</b></p>
          <MainButton text="Оплатить" handler={makePayment} />
        </div>
      </Modal>
    </>
  );
};
