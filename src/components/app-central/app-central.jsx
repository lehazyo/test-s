import React, { useContext } from 'react';
import styles from './app-central.module.css';
import { Header } from '../header/header';
import { Content } from '../content/content';
import { AppContext } from '../..';

export const AppCentral = () => {
  const { currentHeader, currentUpperHeader } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Content header={currentHeader} upperHeader={currentUpperHeader}>
        some content
      </Content>
    </div>
  );
};
