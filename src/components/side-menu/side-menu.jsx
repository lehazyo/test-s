import React from 'react';
import styles from './side-menu.module.css';
import { ReactComponent as IcSpaceWebLogo } from '../../icons/spaceweb-logo.svg';
import { SideMenuItem } from './side-menu-item/side-menu-item';

export const SideMenu = () => {
  return (
    <aside className={styles.wrapper}>
      <figure className={styles["logo-wrapper"]}>
        <IcSpaceWebLogo />
      </figure>
      <section className={styles["items-list"]}>
        <SideMenuItem />
      </section>
    </aside>
  )
};
