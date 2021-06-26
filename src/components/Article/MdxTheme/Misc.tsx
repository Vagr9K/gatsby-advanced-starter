import React from "react";

import { AnimatedLink } from "../../Links";
import Separator from "../../shared/Separator";

import { ExtendingWrapper } from "../Spacing";

export const Break = (): JSX.Element => (
  <ExtendingWrapper>
    <Separator />
  </ExtendingWrapper>
);

export const Link = AnimatedLink;

export { default as Image } from "../Image";
