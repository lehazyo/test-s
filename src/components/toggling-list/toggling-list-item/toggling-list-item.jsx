import React, { useState } from "react";
import { togglingListItemCssClasses } from "./toggling-list-item-css-classes";
import styles from "./toggling-list-item.module.css";

export const TogglingListItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const contentElement = (expanded)
    ? <div className={styles.content} dangerouslySetInnerHTML={{__html: content }} />
    : null;

  const toggleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div onClick={toggleClick} className={togglingListItemCssClasses(expanded)}>
      <header
        aria-label={`${expanded ? "Закрыть" : "Открыть"} пункт «${title}»`}
        className={styles.header}
      >
        {title}
      </header>
      {contentElement}
    </div>
  );
};
