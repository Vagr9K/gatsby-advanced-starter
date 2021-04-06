import React, { useContext } from "react";
import { Follow } from "react-twitter-widgets";
import ConfigContext from "../context/ConfigContext";

type UserInfoProps = {
  expanded: boolean;
};
const UserInfo = ({ expanded }: UserInfoProps): JSX.Element | null => {
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
