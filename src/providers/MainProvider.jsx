import { useState } from "react";
import { MainContext } from "../hooks/useMainContext";

const MainProvider = ({ children }) => {
  // States
  const [timeline, setTimeline] = useState([]);

  const values = { timeline, setTimeline };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainProvider;
