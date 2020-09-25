import React from "react";
import "./UserLinks.css";

function UserLinks({ config, labeled }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <a href={link.url} key={link.label}>
        <button type="button">{labeled ? link.label : ""}</button>
      </a>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return <div className="user-links">{getLinkElements()}</div>;
}

export default UserLinks;
