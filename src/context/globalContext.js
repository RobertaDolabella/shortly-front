import { createContext , useContext} from "react";
import { useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [global, setGlobal] = useState({
      token: null,
      user: null
    });
  
    return (
      <GlobalContext.Provider value={{ global, setGlobal }}>
        {children}
      </GlobalContext.Provider>
    );
  }

  export const useGlobal = () => useContext(GlobalContext);