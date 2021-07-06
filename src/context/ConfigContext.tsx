import * as React from "react";

import { defaultConfig } from "../config";

const ConfigContext = React.createContext(defaultConfig);

type ConfigProviderProps = {
  children: React.ReactNode;
};

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => (
  <ConfigContext.Provider value={defaultConfig}>
    {children}
  </ConfigContext.Provider>
);
export default ConfigContext;
export { ConfigProvider };
