import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const contextValue = {
  currentUser: "vikavishny",
  balance: "100.00",
  notificationsCount: 1,
};
export const AppContext = createContext({});

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={contextValue}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);