import React from "react";

import { config as configFixture } from "../../test/fixtures";

const ConfigContext = React.createContext(configFixture);

const ConfigProvider = ({
  children,
}: {
  children: React.ReactChildren;
}): JSX.Element => (
  <ConfigContext.Provider value={configFixture}>
    {children}
  </ConfigContext.Provider>
);

export { ConfigContext };
export { ConfigProvider };
