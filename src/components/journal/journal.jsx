import React, { useEffect, useState } from "react";
import styles from "./journal.module.css";
import { TogglingList } from "../toggling-list/toggling-list";
import { Preloader } from "../preloader/preloader";

export const Journal = () => {
  const [items, setItems] = useState(null);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const fetchUrl = "https://sweb.ru/export/turbojournal/";
  useEffect(() => fetch(fetchUrl)
    .then(result => result.text())
    .then(result => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(result, 'text/xml');
      const resultItems = xml.querySelectorAll("item");
      const refinedItems = [];
      resultItems.forEach(item => {
        let title;
        let content;

        const itemTopic = item.getElementsByTagName("turbo:topic");
        if (itemTopic.length) {
          if (itemTopic[0].textContent) {
            title = itemTopic[0].textContent;
          }
        }
        const itemContent = item.getElementsByTagName("turbo:content");
        if (itemContent.length) {
          if (itemContent[0].textContent) {
            content = itemContent[0].textContent;
          }
        }

        if (title && content) {
          // удаляем из контента повторяющийся заголовок
          content = content.replace(`<h1>${title}</h1>`, "");
          content = content.replace(/<script>[\s\S]*?<\/script>/g, "");

          refinedItems.push({ title, content });
        }
      });
      setItems(refinedItems);
    })
    .catch(e => {
      setErrorOccurred(true);
    }), [fetchUrl]);

  if (errorOccurred) {
    return (
      <div className={styles.error}>
        Не удалось загрузить список статей
      </div>
    );
  }

  if (items === null) {
    return (
      <div className={styles["preloader-wrapper"]}>
        <Preloader />
      </div>
    );
  }

  if (!items.length) {
    return <div className={styles.empty}>Список статей пуст</div>;
  }

  return <TogglingList items={items} />;
};
