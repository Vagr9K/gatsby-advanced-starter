import React, { createContext } from "react";
import config from "../../data/SiteConfig";

const ConfigContext = createContext(config);

const ConfigProvider = ({ children }) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigContext;
export { ConfigProvider };
