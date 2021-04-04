import React, { useContext } from "react";
import { Follow } from "react-twitter-widgets";
import ConfigContext from "../context/ConfigContext";

type Props = {
  expanded: boolean;
};
const UserInfo: React.FC<Props> = ({ expanded }) => {
  const config = useContext(ConfigContext);

  const { twitterName } = config.user;

  if (!twitterName) return null;

  return (
    <Follow
      username={twitterName}
      options={{ count: expanded ? true : "none" }}
    />
  );
};

export default UserInfo;
