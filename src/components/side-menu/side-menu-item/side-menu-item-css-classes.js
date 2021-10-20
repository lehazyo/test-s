import styles from "./side-menu-item.module.css";

// вынес в отдельный метод, чтобы было проще писать тесты на список классов,
// не рендеря для этого целый компонент 
export const sideMenuItemCssClasses = (selected) => {
  const cssClasses = [styles.wrapper];
  if (selected) {
    cssClasses.push(styles.selected);
  }
  return cssClasses.join(" ");
};