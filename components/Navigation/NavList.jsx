import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { browserHistory } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const NavList = [{
  divider: false,
  subheader: false,
  primaryText: 'Home',
  leftIcon: <FontIcon>home</FontIcon>,
  onClick: () => browserHistory.push(prefixLink('/')),
}, {
  divider: true,
},
];

if (config.userLinks) {
  config.userLinks.forEach((link) => {
    NavList.push(
      {
        divider: false,
        subheader: false,
        primaryText: link[0],
        leftIcon: <FontIcon iconClassName={link[2]} />,
        onClick() { window.location.href = link[1]; },
      },
    );
  });
}

NavList.push({ divider: true });

NavList.push(
  {
    divider: false,
    subheader: false,
    primaryText: 'About',
    leftIcon: <FontIcon>person</FontIcon>,
    onClick: () => browserHistory.push(prefixLink('/about/')),
  },
  );

export default NavList;
