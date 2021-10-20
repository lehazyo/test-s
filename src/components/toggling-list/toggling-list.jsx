import React from "react";
import styles from "./toggling-list.module.css";
import { TogglingListItem } from "./toggling-list-item/toggling-list-item";
import { nanoid } from "nanoid";

export const TogglingList = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map(item => <TogglingListItem key={nanoid()} {...item} />)}
    </div>
  );
}