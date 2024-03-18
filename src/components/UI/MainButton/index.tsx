import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  text: string;
  handler: () => void;
  className?: string;
}

export const MainButton: FC<Props> = ({ text, handler, className }) => {
  return (
    <button className={`${styles.mainButton} ${className}`} onClick={handler} type="button">
      <span>{text}</span>
    </button>
  );
};
