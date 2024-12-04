import React, { createContext, useState } from 'react';

// Membuat context global
export const GlobalStateContext = createContext();

// Membuat provider untuk mengelola state global
export const GlobalStateProvider = ({ children }) => {
  const [globalId, setGlobalId] = useState(0);

  return (
    <GlobalStateContext.Provider value={{ globalId, setGlobalId }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
