import { createContext, useContext } from "react";

export const MainContext = createContext(null);

export default function useMainContext() {
  return useContext(MainContext);
}
