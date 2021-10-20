import React from 'react';
import styles from './side-menu.module.css';
import { ReactComponent as IcSpaceWebLogo } from '../../icons/spaceweb-logo.svg';
import { SideMenuItem } from './side-menu-item/side-menu-item';

export const SideMenu = () => {
  const sideMenuItems = [
    { id: 1, href: "/account/", iconName: "account", title: "Аккаунт", selected: false },
    { id: 2, href: "/vps/", iconName: "vps", title: "VPS", selected: false },
    { id: 3, href: "/domains/", iconName: "domains", title: "Домены", selected: false },
    { id: 4, href: "/journal/", iconName: "journal", title: "Бортовой журнал", selected: true },
  ];

  return (
    <aside className={styles.wrapper}>
      <figure className={styles["logo-wrapper"]}>
        <IcSpaceWebLogo />
      </figure>
      <section className={styles["items-list"]}>
        {sideMenuItems.map(itemInfo => <SideMenuItem key={itemInfo.id} {...itemInfo} />)}
      </section>
    </aside>
  )
};
