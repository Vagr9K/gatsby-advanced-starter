import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import logo from "../../images/logo.png";

export default function Image() {
  console.log("found the logo???");
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <StaticImage
      //   src={logo}
      src="static/logo.jpg"
      // src={data.file.childImageSharp.fixed}
      alt="Gatsby Docs are awesome"
    />
  );
}
