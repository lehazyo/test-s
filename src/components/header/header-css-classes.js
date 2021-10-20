import styles from "./header.module.css";

export const headerCssClasses = (extraClasses) => {
  const classes = [styles.label];
  if (typeof extraClasses === "string") {
    classes.push(extraClasses);
  }
  if (extraClasses instanceof Array) {
    classes.push(...extraClasses);
  }
  return classes.join(" ");
};
