import React, { useContext } from "react";
import styles from "./header.module.css";
import { headerCssClasses } from "./header-css-classes";
import { AppContext } from "../../index";
import { NotificationsIndicator } from "../notifications-indicator/notifications-indicator";

export const Header = () => {
  const { balance, currentUser } = useContext(AppContext);

  return (
    <header className={styles.wrapper}>
      <a
        aria-label="Открыть баланс"
        className={headerCssClasses(styles.balance)}
        href="/balance/"
      >{balance} ₽</a>
      <span className={styles.notifications}>
        <NotificationsIndicator />
      </span>
      <a
        aria-label="Открыть профиль"
        className={headerCssClasses(styles.user)}
        href="/profile/"
      >{currentUser}</a>
      <a
        aria-label="Выйти из личного кабинета"
        className={headerCssClasses(styles.logout)}
        href="/logout/?code=c13367945d5d4c91047b3b50234aa7ab"
      >Выйти</a>
    </header>
  )
};
