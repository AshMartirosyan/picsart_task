import { type FC, PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { variants } from './constants';
import { AnimatedComponent } from './PageTransition.styled';

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnimatedComponent
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}>
        {children}
      </AnimatedComponent>
    </AnimatePresence>
  );
};

export default PageTransition;
