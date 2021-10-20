import React from "react";
import { TogglingList } from "../toggling-list/toggling-list";

export const Journal = () => {
  // пока что тут статичные итемы, но позже сделаю динамические
  const items = [
    { title: "some title", content: "some content" },
  ];

  return <TogglingList items={items} />;
};
