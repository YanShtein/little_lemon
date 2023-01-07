import { createContext } from "react";
import { dishData, ratingsData } from "./initialState";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{
      dishData,
      ratingsData,
    }}>
      {children}
    </AppContext.Provider>
  )
};