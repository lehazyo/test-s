import React from "react";
import styles from "./app-upper.module.css";
import { AppCentral } from "../app-central/app-central";
import { SideMenu } from "../side-menu/side-menu"

export const AppUpper = () => {
  return (
    <section className={styles.wrapper}>
      <SideMenu />
      <AppCentral />
    </section>
  );
};
