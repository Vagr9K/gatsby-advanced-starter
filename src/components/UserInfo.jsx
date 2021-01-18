import React, { useContext } from "react";
import { Follow } from "react-twitter-widgets";
import ConfigContext from "../context/ConfigContext";

function UserInfo({ expanded }) {
  const config = useContext(ConfigContext);

  const { userTwitter } = config;

  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : "none" }}
    />
  );
}

export default UserInfo;
