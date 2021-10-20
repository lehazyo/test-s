import React, { useState } from "react";
import { togglingListItemCssClasses } from "./toggling-list-item-css-classes";
import styles from "./toggling-list-item.module.css";

export const TogglingListItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const contentElement = (expanded) ? <div className={styles.content}>{content}</div> : null;

  const toggleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div onClick={toggleClick} className={togglingListItemCssClasses(expanded)}>
      <header className={styles.header}>{title}</header>
      {contentElement}
    </div>
  );
};
