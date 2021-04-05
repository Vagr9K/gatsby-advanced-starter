import * as React from "react";
import config from "../config";

const ConfigContext = React.createContext(config);

const ConfigProvider: React.FC = ({ children }) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export default ConfigContext;
export { ConfigProvider };
