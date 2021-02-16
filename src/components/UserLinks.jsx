import React, { useContext } from "react";
import "./UserLinks.css";
import ConfigContext from "../context/ConfigContext";

function UserLinks() {
  const config = useContext(ConfigContext);

  function getLinkElements() {
    const { links } = config.user;

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
  return <div className="user-links">{getLinkElements()}</div>;
}

export default UserLinks;
