import React, { useContext } from "react";

import { Link as GatsbyLink } from "gatsby";

import ConfigContext from "../../context/ConfigContext";
import { withBasePath } from "../../config";

export type LinkProps = {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  to: string;
  href?: string;
  noBasePath?: boolean;
  ariaLabel?: string;
};

const Link = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
  ariaLabel,
}: LinkProps): JSX.Element => {
  const config = useContext(ConfigContext);

  const url = href || to;

  const isInternalUrl = /^\/(?!\/)/.test(url);

  // Append basePath when dealing with internal URLs
  const internalUrl = !noBasePath ? withBasePath(config, url) : url;

  return isInternalUrl ? (
    <GatsbyLink
      activeClassName={activeClassName}
      className={className}
      to={internalUrl}
      aria-label={ariaLabel}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a className={className} href={url} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default Link;
