import React from 'react';
import styles from './app-central.module.css';
import { Header } from '../header/header';
import { Content } from '../content/content';

export const AppCentral = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
    </div>
  );
};
