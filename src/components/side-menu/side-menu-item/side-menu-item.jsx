import React from "react";
import { sideMenuItemCssClasses } from "./side-menu-item-css-classes";
import styles from './side-menu-item.module.css';

export const SideMenuItem = ({ iconName, title, href, selected }) => {
  const titleElement = <span className={styles.title}>{title}</span>;

  const linkElement = (selected)
    ? titleElement
    : (
      <a 
        aria-label={`Перейти в раздел ${title}`}
        className={styles.link}
        href={href}
      >
        {titleElement}
      </a>
    );

  return (
    <div className={sideMenuItemCssClasses(selected)}>
      <figure className={styles["icon-wrapper"]}>
        <img
          alt={title}
          aria-label={`Иконка для пункта меню ${title}`}
          className={styles.icon}
          src={`/test-s/build/icons/${iconName}.svg`}
        />
      </figure>
      {linkElement}
    </div>
  );
};
