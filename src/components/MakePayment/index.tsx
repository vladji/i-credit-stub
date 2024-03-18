import { CardBlank } from '../UI/CardBlank';
import { MainButton } from '../UI/MainButton';

export const MakePayment = () => {
  const makePayment = async () => {
    document.location.href = 'https://customer.paybox.money/links?slug=wAAMj';
  };

  return (
    <>
      <CardBlank>
        <MainButton text="Внести оплату" handler={makePayment} />
      </CardBlank>
    </>
  );
};
