import React, { useContext } from "react";
import styles from "./notifications-indicator.module.css";
import { AppContext } from "../../index";
import { ReactComponent as IcNotification } from "../../icons/notification.svg";

export const NotificationsIndicator = () => {
  const { notificationsCount } = useContext(AppContext);

  return (    
    <figure className={styles.wrapper}>
      <a aria-label="Открыть уведомления" className={styles.link} href="/notifications/">
        <IcNotification />
      </a>
      <span className={styles.counter}>{notificationsCount}</span>
    </figure>
  );
};
