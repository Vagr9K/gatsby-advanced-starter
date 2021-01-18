import React from "react";
import { Follow } from "react-twitter-widgets";

const config = require("../../data/SiteConfig");

function UserInfo({ expanded }) {
  const { userTwitter } = config;

  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : "none" }}
    />
  );
}

export default UserInfo;
