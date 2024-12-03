import React, { createContext, useState } from 'react';

// Membuat context global
export const GlobalStateContext = createContext();

// Membuat provider untuk mengelola state global
export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalStateContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
