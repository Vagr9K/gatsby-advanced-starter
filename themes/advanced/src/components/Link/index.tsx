import React from "react";

import { Link as GatsbyLink } from "gatsby";

import { useConfig, withBasePath } from "../../config";

export type LinkProps = {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  to: string;
  href?: string;
  noBasePath?: boolean;
  ariaLabel?: string;
  allowJavaScriptUrls?: boolean;
};

const isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i

const Link = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
  ariaLabel,
  allowJavaScriptUrls = true,
}: LinkProps): JSX.Element => {
  const config = useConfig();

  const url = href || to;

  if (isJavaScriptProtocol.test(url) && !allowJavaScriptUrls) {
    console.warn(`Link has blocked a javascript: URL as a security precaution`);
    return null;
  }

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
