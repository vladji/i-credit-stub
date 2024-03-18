import { FC, ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
