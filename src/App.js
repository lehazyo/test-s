import React from 'react';
import styles from './app.module.css';
import './index.css';
import './fonts.css';
import { AppUpper } from './components/app-upper/app-upper';
import { Footer } from './components/footer/footer';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppUpper />
      <Footer />
    </div>
  );
};
