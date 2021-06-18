import React from "react";
import { Link as GatsbyLink } from "gatsby";

export type LinkProps = {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  to: string;
  href?: string;
};

export const BaseLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
}: LinkProps): JSX.Element => {
  const url = href || to;

  const isInternalUrl = /^\/(?!\/)/.test(url);

  return isInternalUrl ? (
    <GatsbyLink
      activeClassName={activeClassName}
      className={className}
      to={url}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a className={className} href={url}>
      {children}
    </a>
  );
};
