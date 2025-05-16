
import React, { createContext, useState } from 'react';

// Buat context
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {

  // ⬅️ Tambahkan ini
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <UserContext.Provider value={{
      scrollTarget, setScrollTarget // ⬅️ Tambahkan ke value
    }}>
      {children}
    </UserContext.Provider>
  );
};
