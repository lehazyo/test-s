import React from "react";
import styles from "./content.module.css";

export const Content = ({
  upperHeader,
  header,
  children,
}) => {
  return (
    <main className={styles.wrapper}>
      {upperHeader ? <h2 className={styles["upper-header"]}>{upperHeader}</h2> : null}
      <h1 className={styles.header}>{header}</h1>
      <section className={styles.items}>
        {children}
      </section>
    </main>
  )
};
