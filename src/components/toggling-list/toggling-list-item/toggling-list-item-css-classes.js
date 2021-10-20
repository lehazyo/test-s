import styles from "./toggling-list-item.module.css";

export const togglingListItemCssClasses = (expanded) => {
  const classes = [styles.wrapper];
  if (expanded) {
    classes.push(styles.expanded);
  }
  return classes.join(" ");
};
