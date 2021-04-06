import React, { useContext } from "react";
import "./UserLinks.css";
import ConfigContext from "../context/ConfigContext";

const UserLinks = (): JSX.Element | null => {
  const config = useContext(ConfigContext);

  function getLinkElements(links: Array<{ label: string; url: string }>) {
    return links.map((link) => (
      <a href={link.url} key={link.label}>
        <button type="button">{link.label}</button>
      </a>
    ));
  }

  const { links } = config.user;
  if (!links) {
    return null;
  }
  return <div className="user-links">{getLinkElements(links)}</div>;
};

export default UserLinks;
