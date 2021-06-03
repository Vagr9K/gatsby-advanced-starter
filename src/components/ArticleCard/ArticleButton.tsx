import React from "react";
import { Exit } from "@styled-icons/boxicons-regular";

import { ReadButton } from "./style";

type ArticleButtonProps = { to: string };

const ArticleButton = ({ to }: ArticleButtonProps): JSX.Element => (
  <ReadButton to={to}>
    Read the article <Exit size={28} />
  </ReadButton>
);

export default ArticleButton;
