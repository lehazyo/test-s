import React from "react";
import { sideMenuItemCssClasses } from "./side-menu-item-css-classes";
import styles from './side-menu-item.module.css';

export const SideMenuItem = ({ iconName, title, href, selected }) => {
  const linkElement = (selected)
    ? null
    : <a aria-label={`Перейти в раздел ${title}`} className={styles.link} href={href}></a>

  return (
    <div className={sideMenuItemCssClasses(selected)}>
      <figure className={styles["icon-wrapper"]}>
        <img
          alt={title}
          aria-label={`Иконка для пункта меню ${title}`}
          className={styles.icon}
          src={`/icons/${iconName}.svg`}
        />
      </figure>
      {linkElement}
      <span className={styles.title}>{title}</span>
    </div>
  );
};
