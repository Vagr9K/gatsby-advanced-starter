import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { browserHistory } from 'gatsby-link';
import { config } from 'config';

const NavList = [{
  divider: false,
  subheader: false,
  primaryText: 'Home',
  leftIcon: <FontIcon>home</FontIcon>,
  onClick: () => browserHistory.push('/'),
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
        leftIcon: <FontIcon forceSize iconClassName={link[2]} />,
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
    onClick: () => browserHistory.push('/about/'),
  },
  );

export default NavList;

// TODO: Does browserhistory have prefixLink?
