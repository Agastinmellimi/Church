import { createContext } from "react";

const HandlerContext = createContext({
  lightMode: true,
  setMode: () => {},
  activeTab: "",
  setActiveTab: () => {},
});

export default HandlerContext;
