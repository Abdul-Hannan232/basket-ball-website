"use client"
import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [count, setCount] = useState(0);
 

  return (
    <NavbarContext.Provider value={{count,setCount}}>
      {children}
    </NavbarContext.Provider>
  );
};
