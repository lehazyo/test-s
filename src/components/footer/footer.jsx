import React from "react";
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.legal}>
        © 2001– 2018 ООО <a href="https://sweb.ru/">«СпейсВэб»</a><br />
        Все права защищены.<br />
        Лицензия <a href="/license/">№163230</a>
      </section>
      <section className={styles.phones}>
        <a href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)<br />
        <a href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)<br />
        <a href="tel:+78001001615">(800) 100-16-15</a> (бесплатно по России)
      </section>
    </footer>
  )
};
