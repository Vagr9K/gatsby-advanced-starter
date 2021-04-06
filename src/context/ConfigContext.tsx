import * as React from "react";
import config from "../config";

const ConfigContext = React.createContext(config);

type ConfigProviderProps = {
  children: React.ReactNode;
};

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export default ConfigContext;
export { ConfigProvider };
