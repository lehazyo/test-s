import React from 'react';
import { AppCentral } from "../app-central/app-central";
import { SideMenu } from "../side-menu/side-menu"

export const AppUpper = () => {
  return (
    <>
      <SideMenu />
      <AppCentral />
    </>
  );
};
