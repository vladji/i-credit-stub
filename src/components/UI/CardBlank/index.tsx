import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardBlankProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CardBlank: FC<CardBlankProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={`${styles.cardBlank} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
